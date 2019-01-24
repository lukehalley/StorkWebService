import { Stork } from './stork.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StorksService {
  private storks: Stork[] = [];
  private storksUpdated = new Subject<Stork[]>();

  constructor(private http: HttpClient) {}

  getStorks() {
    this.http
      .get<{ message: string; storks: any }>('http://localhost:3000/api/storks')
      // Coverting the Storks we get back to match the formating of them in the MongoDB
      // database - specifically the _id tag using a new map
      .pipe(
        map(storkData => {
          return storkData.storks.map(stork => {
            return {
              stork_code: stork.stork_code,
              nickname: stork.nickname,
              id: stork._id
            };
          });
        })
      )
      .subscribe(storks => {
        this.storks = storks;
        this.storksUpdated.next([...this.storks]);
      });
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
      });
  }

  getStork(id: string) {
    // return { ...this.storks.find(s => s.id === id) };
    return this.http.get<{ _id: string; stork_code: string; nickname: string }>(
      'http://localhost:3000/api/storks/' + id
    );
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
