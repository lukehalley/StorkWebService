import { FormsModule } from '@angular/forms';
import { StorkCreateComponent } from './stork-create/stork-create.component';
import { StorkListComponent } from './stork-list/stork-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorkRoutingModule } from './stork-routing-module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [StorkCreateComponent, StorkListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StorkRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbws0OJ-RtW-7lb3CyoqoObud2ipblcso'
    }),
    AgmDirectionModule
  ]
})
export class StorksModule {}
