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
  public userIsAuthenticated = false;

  // Using Angular dependency injection
  constructor(
    public storksService: StorksService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storksService.getStorks();
    this.storksSub = this.storksService
      .getStorksUpdateListener()
      .subscribe((storks: Stork[]) => {
        this.storks = storks;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        console.log('User is Authenticated: ' + isAuthenticated);
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy(): void {
    this.storksSub.unsubscribe();
  }

  onDelete(storkId: string) {
    this.storksService.deleteStork(storkId);
    this.authStatusSub.unsubscribe();
  }
}
