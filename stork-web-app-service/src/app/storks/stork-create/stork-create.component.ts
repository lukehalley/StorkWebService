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

  // Create the emmiter to update the values system wide
  @Output() storkCreated = new EventEmitter<Stork>();

  // Create the button press listener
  onAddStork(form: NgForm) {

    const idLen = form.value.inputStorkID.length;
    const nickLen = form.value.inputStorkNickname.length;

    const idType = typeof form.value.inputStorkID;
    const nickType = typeof form.value.inputStorkNickname;

    if (form.valid) {
      this.idInput = this.normalInput;
      const stork: Stork = {
        stork_id: form.value.inputStorkID,
        nickname: form.value.inputStorkNickname
      };
      this.storkCreated.emit(stork);
    } else {
      if (idLen !== 7 || idType !== 'string') {
        this.idInput = this.errorInput;
      }
      if (nickLen > 20 || nickLen === 0 || nickType !== 'string') {
        this.nicknameInput = this.errorInput;
      }
      return;
    }

  }
}
