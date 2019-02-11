import { Component } from '@angular/core';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent {

  enteredNickname = '';
  enteredStorkID = '';

  onAddStork() {
    const post = {
      nickname: this.enteredNickname,
      storkid: this.enteredStorkID
    }
  }
}
