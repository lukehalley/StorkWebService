import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent {
  enteredValue = '';
  newStork = 'No Content';

  onAddStork() {
    this.newStork = this.enteredValue;
  }
}
