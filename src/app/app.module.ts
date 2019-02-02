import { AuthInterceptor } from './auth/auth-interceptor';
import { StorkSignUpComponent } from './auth/signup/stork-sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StorkCreateComponent } from './storks/stork-create/stork-create.component';
import { StorkHeaderComponent } from './toolbar/header.component';
import { StorkListComponent } from './storks/stork-list/stork-list.component';
import { StorkLoginComponent } from './auth/login/stork-login.component';
import { ErrorInterceptor } from './error-interceptor';
import { StorksModule } from './storks/storks.module';

@NgModule({
  declarations: [
    AppComponent,
    StorkHeaderComponent,
    StorkLoginComponent,
    StorkSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StorksModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
