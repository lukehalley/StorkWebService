import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './stork-sign-up.component.html'
})
export class StorkSignUpComponent {
  // Init classes for login input fields
  public firstNameInput = 'input is-large';
  public secondNameInput = 'input is-large';
  public emailInput = 'input is-large';
  public passwordInput = 'input is-large';

  // Readymade classes to set inputs as error or ok
  public normalInput = 'input is-large';
  public errorInput = 'input is-large is-danger';
  public goodInput = 'input is-large is-success';

  // Init classes for error messages
  public fNameMsgError = 'help is-danger is-hidden';
  public sNameMsgError = 'help is-danger is-hidden';
  public emailMsgError = 'help is-danger is-hidden';
  public passwordMsgError = 'help is-danger is-hidden';

  // Init classes for success messages
  public fNameMsgGood = 'help is-success is-hidden';
  public sNameMsgGood = 'help is-success is-hidden';
  public emailMsgGood = 'help is-success is-hidden';
  public passwordMsgGood = 'help is-success is-hidden';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsgError = 'help is-danger is-hidden';
  public showMsgError = 'help is-danger';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsgGood = 'help is-success is-hidden';
  public showMsgGood = 'help is-success';

  onSignUp(form: NgForm) {}
}
