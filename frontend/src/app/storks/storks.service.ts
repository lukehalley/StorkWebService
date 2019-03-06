import { Stork } from './stork.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

const BACKEND_URL = environment.apiUrl + '/storks';

@Injectable({ providedIn: 'root' })
export class StorksService {
  private storks: Stork[] = [];
  private storksUpdated = new Subject<Stork[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getStorks(userId: string) {
    this.http
      .get<{ message: string; storks: any }>(BACKEND_URL + '/' + userId)
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
              latitude: stork.location.coordinates[0],
              longitude: stork.location.coordinates[1]
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
    return this.http.get<{ _id: string; stork_code: string; nickname: string; latitude: number, longitude: number}>(
      BACKEND_URL + '/one/' + id
    );
  }

  getStorksUpdateListener() {
    return this.storksUpdated.asObservable();
  }

  addStork(stork_code: string, nickname: string) {
    const stork: Stork = {
      id: null,
      stork_code: stork_code,
      nickname: nickname,
      latitude: 4534,
      longitude: 345345
    };
    this.http
      .post<{ message: string; storkId: string }>(BACKEND_URL, stork)
      .subscribe(responseData => {
        const id = responseData.storkId;
        stork.id = id;
        // Only pushing if the response is sucessfull.
        this.storks.push(stork);
        this.storksUpdated.next([...this.storks]);
      });
  }

  updateStork(id: string, stork_code: string, nickname: string, lat: number, long: number) {
    const stork: Stork = {
      id: id,
      stork_code: stork_code,
      nickname: nickname,
      latitude: lat,
      longitude: long
    };

    this.http.put(BACKEND_URL + '/' + id, stork).subscribe(response => {
      const updatedStorks = [...this.storks];
      const oldStorkIndex = updatedStorks.findIndex(s => s.id === stork.id);
      updatedStorks[oldStorkIndex] = stork;
      this.storks = updatedStorks;
      this.storksUpdated.next([...this.storks]);
    });
  }

  deleteStork(storkId: string) {
    this.http.delete(BACKEND_URL + '/' + storkId).subscribe(() => {
      // Updating the stork list after a delete occurs.
      const updatedStorks = this.storks.filter(stork => stork.id !== storkId);
      this.storks = updatedStorks;
      this.storksUpdated.next([...this.storks]);
    });
  }
}
