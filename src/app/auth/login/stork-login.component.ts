import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './stork-login.component.html'
})
export class StorkLoginComponent {
  constructor(public authService: AuthService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      this.authService.login(
        form.value.inputUserLoginEmail,
        form.value.inputUserLoginPassword
      );
      this.router.navigate(['/your-storks']);
    } else {
      console.log('Login Failed!');
      return;
    }
  }
}
