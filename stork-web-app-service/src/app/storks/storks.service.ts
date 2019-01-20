import { Stork } from './stork.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StorksService {
  private storks: Stork[] = [];
  private storksUpdated = new Subject<Stork[]>();

  constructor(private http: HttpClient) {}

  getStorks() {
    this.http
      .get<{ message: string; storks: Stork[] }>(
        'http://localhost:3000/api/storks'
      )
      .subscribe(storkData => {
        this.storks = storkData.storks;
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
      .post<{ message: string }>('http://localhost:3000/api/storks', stork)
      .subscribe(responseData => {
        console.log(responseData.message);
        // Only pushing if the response is sucessfull.
        this.storks.push(stork);
        this.storksUpdated.next([...this.storks]);
      });
  }
}
