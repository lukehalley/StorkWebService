import { AuthService } from './../../auth/auth.service';
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
  private authStatusSub: Subscription;
  public userIsAuthenticated: boolean;
  public userId: string;

  // Using Angular dependency injection
  constructor(
    public storksService: StorksService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storksSub = this.storksService
      .getStorksUpdateListener()
      .subscribe((storks: Stork[]) => {
        this.storks = storks;
      });
    this.userId = this.authService.getUserId();
    this.storksService.getStorks(this.userId);
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
        if (isAuthenticated) {
          this.storksService.getStorks(this.userId);
        } else {
        }
      });
  }

  ngOnDestroy(): void {
    this.storksSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

  onDelete(storkId: string) {
    this.storksService.deleteStork(storkId);
  }
}
