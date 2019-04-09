import { Component, EventEmitter, Output } from '@angular/core';

import { Stork } from '../stork.model';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent {
  enteredStork_id = '';
  enteredNickname = '';
  @Output() storkCreated = new EventEmitter<Stork>();

  onAddStork() {
    const stork: Stork = {
      stork_id: this.enteredStork_id,
      nickname: this.enteredNickname
    };
    this.storkCreated.emit(stork);
  }
}
