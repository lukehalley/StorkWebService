import { FormsModule } from '@angular/forms';
import { StorkCreateComponent } from './stork-create/stork-create.component';
import { StorkListComponent } from './stork-list/stork-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorkRoutingModule } from './stork-routing-module';

@NgModule({
  declarations: [StorkCreateComponent, StorkListComponent],
  imports: [CommonModule, FormsModule, RouterModule, StorkRoutingModule]
})
export class StorksModule {}
