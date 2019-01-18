import { Component } from '@angular/core';

import { Stork } from './storks/stork.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedStorks: Stork[] = [];

  onStorkAdded(stork) {
    this.storedStorks.push(stork);
  }
}
