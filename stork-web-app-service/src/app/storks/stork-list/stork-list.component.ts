import { Component, Input } from '@angular/core';

import { Stork } from '../stork.model';

@Component({
  selector: 'app-stork-list',
  templateUrl: './stork-list.component.html'
})
export class StorkListComponent {

  @Input() storks: Stork[] = [];
}
