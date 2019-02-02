import { FormsModule } from '@angular/forms';
import { StorkCreateComponent } from './stork-create/stork-create.component';
import { StorkListComponent } from './stork-list/stork-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StorkCreateComponent, StorkListComponent],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class StorksModule {}
