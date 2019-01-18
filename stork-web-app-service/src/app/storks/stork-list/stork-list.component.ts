import { Component } from '@angular/core';

@Component({
  selector: 'app-stork-list',
  templateUrl: './stork-list.component.html'
})
export class StorkListComponent {
  storks = [
    {
      title: 'Handbag',
      content: 'Waterford'
    },
    {
      title: 'Charger',
      content: 'Broken'
    },
    {
      title: 'Coffee',
      content: 'Arrived'
    }
  ];
}
