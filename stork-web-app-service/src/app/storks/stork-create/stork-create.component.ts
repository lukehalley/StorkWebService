import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { Stork } from '../stork.model';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent {
  // Input field values
  enteredStork_id = '';
  enteredNickname = '';

  // Init classes for input fields
  public idInput = 'input';
  public nicknameInput = 'input';

  // Readymade classes to set inputs as error or ok
  public normalInput = 'input';
  public errorInput = 'input is-danger';

  // Init classes for error messages
  public idMsg = 'help is-danger is-hidden';
  public nicknameMsg = 'help is-danger is-hidden';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsg = 'help is-danger is-hidden';
  public showMsg = 'help is-danger';

  // Create the emmiter to update the values system wide
  @Output() storkCreated = new EventEmitter<Stork>();

  // Create the button press listener
  onAddStork(form: NgForm) {

    const idVal = form.value.inputStorkID;
    const idNick = form.value.inputStorkNickname;

    const idLen = form.value.inputStorkID.length;
    const nickLen = form.value.inputStorkNickname.length;

    const idType = typeof form.value.inputStorkID;
    const nickType = typeof form.value.inputStorkNickname;

    if (form.valid) {
      this.idInput = this.normalInput;
      this.idMsg = this.hiddenMsg;
      this.nicknameInput = this.normalInput;
      this.nicknameMsg = this.hiddenMsg;
      const stork: Stork = {
        stork_id: form.value.inputStorkID,
        nickname: form.value.inputStorkNickname
      };
      this.storkCreated.emit(stork);
    } else {
      if (idLen !== 7 || idType !== 'string' || !/[A-Z0-9]*/.test(idVal)) {
        this.idInput = this.errorInput;
        this.idMsg = this.showMsg;
      } else {
        this.idInput = this.normalInput;
        this.idMsg = this.hiddenMsg;
      }
      if (nickLen > 20 || nickLen < 4 || nickType !== 'string' || !/[a-zA-Z0-9]*/.test(idNick)) {
        this.nicknameInput = this.errorInput;
        this.nicknameMsg = this.showMsg;
      } else {
        this.nicknameInput = this.normalInput;
        this.nicknameMsg = this.hiddenMsg;
      }
      return;
    }

  }
}
