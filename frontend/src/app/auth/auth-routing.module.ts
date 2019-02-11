import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StorkLoginComponent } from './login/stork-login.component';
import { StorkSignUpComponent } from './signup/stork-sign-up.component';

const routes: Routes = [
  { path: 'login', component: StorkLoginComponent },
  { path: 'sign-up', component: StorkSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
