import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './stork-sign-up.component.html'
})
export class StorkSignUpComponent {
  // Init classes for login input fields
  public firstNameInput = 'input is-large';
  public secondNameInput = 'input is-large';
  public addressInput = 'input is-large';
  public phoneNumberInput = 'input is-large';
  public usernameInput = 'input is-large';
  public emailInput = 'input is-large';
  public passwordInput = 'input is-large';

  // Readymade classes to set inputs as error or ok
  public normalInput = 'input is-large';
  public errorInput = 'input is-large is-danger';
  public goodInput = 'input is-large is-success';

  constructor(public authService: AuthService) {}

  onSignUp(form: NgForm) {
    if (form.valid) {
      this.authService.createUser(
        form.value.inputUserSignUpUsername,
        form.value.inputUserLoginEmail,
        form.value.inputUserLoginPassword,
        form.value.inputUserSignUpFName,
        form.value.inputUserSignUpSName,
        form.value.inputUserSignUpAddress,
        form.value.inputUserSignUpPhoneNumber,
        form.value.inputUserSignUpAddress
      );
    } else {
      console.log('No!!!!!!');

      return;
    }
  }
}
