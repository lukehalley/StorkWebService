import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent {

  enteredNickname = '';
  enteredStorkID = '';
  @Output() storkCreated = new EventEmitter();

  onAddStork() {
    const stork = {
      nickname: this.enteredNickname,
      storkid: this.enteredStorkID
    };
    this.storkCreated.emit(stork);
  }
}
