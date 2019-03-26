import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedStorks = [];

  onStorkAdded(stork) {
    this.storedStorks.push(stork);
  }
}
