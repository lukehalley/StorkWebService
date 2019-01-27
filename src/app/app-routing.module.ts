import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorkListComponent } from './storks/stork-list/stork-list.component';
import { StorkCreateComponent } from './storks/stork-create/stork-create.component';
import { StorkLoginComponent } from './auth/login/stork-login.component';
import { StorkSignUpComponent } from './auth/signup/stork-sign-up.component';

const routes: Routes = [
  { path: '', component: StorkLoginComponent },
  { path: 'your-storks', component: StorkListComponent },
  { path: 'register-stork', component: StorkCreateComponent },
  { path: 'edit/:storkId', component: StorkCreateComponent },
  { path: 'login', component: StorkLoginComponent },
  { path: 'sign-up', component: StorkSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
