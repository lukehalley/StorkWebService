import { Stork } from './stork.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StorksService {
  private storks: Stork[] = [];
  private storksUpdated = new Subject<Stork[]>();

  getStorks() {
    // Using the spread operator to create a new array and take all the elements
    // from storks and put them in the new array. This will keep the original array
    // the same and safe.
    return [...this.storks];
  }

  getStorksUpdateListener() {
    return this.storksUpdated.asObservable();
  }

  addStork(stork_id: string, nickname: string) {
    const stork: Stork = {stork_id: stork_id, nickname: nickname};
    this.storks.push(stork);
    this.storksUpdated.next([...this.storks]);
  }

}
