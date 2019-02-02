import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './stork-sign-up.component.html'
})
export class StorkSignUpComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        // Only go to the login page if the signup is valid.
        this.router.navigate(['/login']);
      });
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.authService.createUser(
        form.value.inputUserSignUpFName,
        form.value.inputUserSignUpSName,
        form.value.inputUserSignUpAddress,
        form.value.inputUserSignUpPhoneNumber,
        form.value.inputUserSignUpUsername,
        form.value.inputUserLoginEmail,
        form.value.inputUserLoginPassword,
        'free'
      );
    }
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
