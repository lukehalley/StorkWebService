import { Component, Input } from '@angular/core';

import { Stork } from '../stork.model';
import { StorksService } from '../storks.service';

@Component({
  selector: 'app-stork-list',
  templateUrl: './stork-list.component.html'
})
export class StorkListComponent {

  @Input() storks: Stork[] = [];

  // Using Angular dependency injection
  constructor(public storksService: StorksService) {}

}
