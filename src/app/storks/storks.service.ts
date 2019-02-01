import { Stork } from './stork.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StorksService {
  private storks: Stork[] = [];
  private storksUpdated = new Subject<Stork[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getStorks(userId: string) {
    console.log('http://localhost:3000/api/storks/' + userId);

    this.http
      .get<{ message: string; storks: any }>(
        'http://localhost:3000/api/storks/' + userId
      )
      // Coverting the Storks we get back to match the formating of them in the MongoDB
      // database - specifically the _id tag using a new map
      .pipe(
        map(storkData => {
          return storkData.storks.map(stork => {
            console.log(
              'GOT THIS BACK' +
                stork.stork_code +
                ' ' +
                stork.nickname +
                ' ' +
                stork._id +
                ' ' +
                stork.ownerId
            );
            return {
              stork_code: stork.stork_code,
              nickname: stork.nickname,
              id: stork._id,
              ownerId: stork.ownerId
            };
          });
        })
      )
      .subscribe(storks => {
        console.log(storks);

        this.storks = storks;
        this.storksUpdated.next([...this.storks]);
      });
  }

  getStork(id: string) {
    // return { ...this.storks.find(s => s.id === id) };
    return this.http.get<{ _id: string; stork_code: string; nickname: string }>(
      'http://localhost:3000/api/storks/' + id
    );
  }

  getStorksUpdateListener() {
    return this.storksUpdated.asObservable();
  }

  addStork(stork_code: string, nickname: string) {
    const stork: Stork = {
      id: null,
      stork_code: stork_code,
      nickname: nickname
    };
    this.http
      .post<{ message: string; storkId: string }>(
        'http://localhost:3000/api/storks',
        stork
      )
      .subscribe(responseData => {
        const id = responseData.storkId;
        stork.id = id;
        // Only pushing if the response is sucessfull.
        this.storks.push(stork);
        this.storksUpdated.next([...this.storks]);
        // this.router.navigate(['/']);
      });
  }

  updateStork(id: string, stork_code: string, nickname: string) {
    const stork: Stork = {
      id: id,
      stork_code: stork_code,
      nickname: nickname
    };

    this.http
      .put('http://localhost:3000/api/storks/' + id, stork)
      .subscribe(response => {
        const updatedStorks = [...this.storks];
        const oldStorkIndex = updatedStorks.findIndex(s => s.id === stork.id);
        updatedStorks[oldStorkIndex] = stork;
        this.storks = updatedStorks;
        this.storksUpdated.next([...this.storks]);
        // this.router.navigate(['/']);
      });
  }

  deleteStork(storkId: string) {
    this.http
      .delete('http://localhost:3000/api/storks/' + storkId)
      .subscribe(() => {
        // Updating the stork list after a delete occurs.
        const updatedStorks = this.storks.filter(stork => stork.id !== storkId);
        this.storks = updatedStorks;
        this.storksUpdated.next([...this.storks]);
      });
  }
}
