import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './stork-login.component.html'
})
export class StorkLoginComponent {
  // Init classes for login input fields
  public emailInput = 'input is-large';
  public passwordInput = 'input is-large';

  // Readymade classes to set inputs as error or ok
  public normalInput = 'input is-large';
  public errorInput = 'input is-large is-danger';
  public goodInput = 'input is-large is-success';

  // Init classes for error messages
  public emailMsgError = 'help is-danger is-hidden';
  public passwordMsgError = 'help is-danger is-hidden';

  // Init classes for success messages
  public emailMsgGood = 'help is-success is-hidden';
  public passwordMsgGood = 'help is-success is-hidden';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsgError = 'help is-danger is-hidden';
  public showMsgError = 'help is-danger';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsgGood = 'help is-success is-hidden';
  public showMsgGood = 'help is-success';

  onLogin(form: NgForm) {}
}
