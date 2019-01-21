import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StorkCreateComponent } from './storks/stork-create/stork-create.component';
import { StorkHeaderComponent } from './toolbar/header.component';
import { StorkListComponent } from './storks/stork-list/stork-list.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    StorkCreateComponent,
    StorkHeaderComponent,
    StorkListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
