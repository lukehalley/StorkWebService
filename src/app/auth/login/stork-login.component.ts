import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './stork-login.component.html'
})
export class StorkLoginComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        // Navigate to the list of storks after login
        this.router.navigate(['/storks/your-storks']);
      });
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      this.authService.login(
        form.value.inputUserLoginEmail,
        form.value.inputUserLoginPassword
      );
    } else {
      console.log('Login Failed!');
      return;
    }
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
