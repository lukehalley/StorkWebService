import { Device } from './device.model';
import { AuthService } from './../auth/auth.service';
import { Stork } from './stork.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

const BACKEND_URL_STORKS = environment.apiUrl + '/storks';
const BACKEND_URL_DEVICES = environment.apiUrl + '/devices';

@Injectable({ providedIn: 'root' })
export class StorksService {
  private storks: Stork[] = [];
  private storksUpdated = new Subject<Stork[]>();
  public userId: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  getStorks(userId: string) {
    this.http
      .get<{ message: string; storks: any }>(BACKEND_URL_STORKS + '/' + userId)
      // Coverting the Storks we get back to match the formating of them in the MongoDB
      // database - specifically the _id tag using a new map
      .pipe(
        map(storkData => {
          return storkData.storks.map(stork => {
            return {
              stork_code: stork.stork_code,
              nickname: stork.nickname,
              id: stork._id,
              ownerId: stork.ownerId,
              gpsType: stork.gpsType,
              latitude: stork.location.coordinates[0],
              longitude: stork.location.coordinates[1],
              statusCode: stork.statusCode
            };
          });
        })
      )
      .subscribe(storks => {
        this.storks = storks;
        this.storksUpdated.next([...this.storks]);
      });
  }

  // This might not be working because its using the same url as get all above
  getStork(id: string) {
    // return { ...this.storks.find(s => s.id === id) };
    return this.http.get<{
      _id: string;
      stork_code: string;
      nickname: string;
      gpsType: string;
      latitude: number;
      longitude: number;
      statusCode: number;
    }>(BACKEND_URL_STORKS + '/one/' + id);
  }

  getStorksUpdateListener() {
    return this.storksUpdated.asObservable();
  }

  addStork(stork_code: string, nickname: string) {
    const stork: Stork = {
      id: null,
      stork_code: stork_code,
      nickname: nickname,
      gpsType: null,
      latitude: null,
      longitude: null,
      statusCode: null
    };
    this.http
      .get<{
        _id: string;
        storkCode: string;
        available: string;
        ownerId: string;
      }>(BACKEND_URL_DEVICES + '/admin/available-device/' + stork_code)
      .subscribe(responseData => {
        const devId = responseData._id;
        this.http
          .post<{ message: string; storkId: string }>(BACKEND_URL_STORKS, stork)
          .subscribe(
            resData => {
              const id = resData.storkId;
              const available = responseData.available;
              if (id != null && available === 'true') {
                stork.id = id;
                // Only pushing if the response is sucessfull.
                this.userId = this.authService.getUserId();
                console.log('SETTING STORK OWNER AS: ' + this.userId);
                const device: Device = {
                  stork_code: stork_code,
                  available: 'false',
                  ownerId: this.userId
                };
                this.http
                  .put(
                    BACKEND_URL_DEVICES +
                      '/admin/available-device/update/' +
                      stork_code,
                    device
                  )
                  .subscribe(
                    response => {
                      this.storks.push(stork);
                      this.storksUpdated.next([...this.storks]);
                      this.router.navigate(['/storks/your-storks']);
                    },
                    error => {
                      console.log('THIS DEVICE DOESNT EXIST - Error ' + error);
                    }
                  );
              } else {
                return;
              }
            },
            error => {
              console.log('THIS DEVICE DOESNT EXIST - Error ' + error);
            }
          );
      });
  }

  updateStork(
    id: string,
    stork_code: string,
    nickname: string,
    gpsType: string,
    lat: number,
    long: number,
    statusCode: number
  ) {
    const stork: Stork = {
      id: id,
      stork_code: stork_code,
      nickname: nickname,
      gpsType: gpsType,
      latitude: lat,
      longitude: long,
      statusCode: statusCode
    };

    this.http.put(BACKEND_URL_STORKS + '/' + id, stork).subscribe(response => {
      const updatedStorks = [...this.storks];
      const oldStorkIndex = updatedStorks.findIndex(s => s.id === stork.id);
      updatedStorks[oldStorkIndex] = stork;
      this.storks = updatedStorks;
      this.storksUpdated.next([...this.storks]);
    });
  }

  deleteStork(storkId: string) {
    this.http.delete(BACKEND_URL_STORKS + '/' + storkId).subscribe(() => {
      // Updating the stork list after a delete occurs.
      const updatedStorks = this.storks.filter(stork => stork.id !== storkId);
      this.storks = updatedStorks;
      this.storksUpdated.next([...this.storks]);
    });
  }
}
