import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StorkCreateComponent } from './storks/stork-create/stork-create.component';
import { StorkHeaderComponent } from './toolbar/header.component';
import { StorkListComponent } from './storks/stork-list/stork-list.component';
import { StorkSubListComponent } from './storks/stork-sublist/stork-sublist.component';
import { StorkLoginComponent } from './auth/login/stork-login.component';

@NgModule({
  declarations: [
    AppComponent,
    StorkCreateComponent,
    StorkHeaderComponent,
    StorkListComponent,
    StorkSubListComponent,
    StorkLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
