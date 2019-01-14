import { Component } from '@angular/core';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent {
  onAddStork() {
    alert('Stork Added!');
  }
}
