import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorkLoginComponent } from './login/stork-login.component';
import { StorkSignUpComponent } from './signup/stork-sign-up.component';

@NgModule({
  declarations: [StorkLoginComponent, StorkSignUpComponent],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class AuthModule {}
