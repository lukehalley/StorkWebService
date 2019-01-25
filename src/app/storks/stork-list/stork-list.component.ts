import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Stork } from '../stork.model';
import { StorksService } from '../storks.service';

@Component({
  selector: 'app-stork-list',
  templateUrl: './stork-list.component.html'
})
export class StorkListComponent implements OnInit, OnDestroy {
  storks: Stork[] = [];

  private storksSub: Subscription;

  // Using Angular dependency injection
  constructor(public storksService: StorksService) {}

  ngOnInit(): void {
    this.storksService.getStorks();
    this.storksSub = this.storksService
      .getStorksUpdateListener()
      .subscribe((storks: Stork[]) => {
        this.storks = storks;
      });
  }

  ngOnDestroy(): void {
    this.storksSub.unsubscribe();
  }

  onDelete(storkId: string) {
    this.storksService.deleteStork(storkId);
  }
}
