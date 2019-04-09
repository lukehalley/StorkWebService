import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { Stork } from '../stork.model';
import { StorksService } from '../storks.service';

import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-stork-list',
  templateUrl: './stork-list.component.html'
})
export class StorkListComponent implements OnInit, OnDestroy {
  storks: Stork[] = [];

  lat: Number = 24.7994;
  lng: Number = 120.9791;

  origin = { lat: 24.7994, lng: 120.9791 };
  destination = { lat: 24.7995, lng: 120.9755 };

  private storksSub: Subscription;
  private authStatusSub: Subscription;
  public userIsAuthenticated: boolean;
  public userId: string;

  @ViewChild(AgmMap)
  public agmMap: AgmMap;

  // Using Angular dependency injection
  constructor(
    public storksService: StorksService,
    private authService: AuthService,
    public router: Router
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
          this.agmMap.triggerResize();
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
