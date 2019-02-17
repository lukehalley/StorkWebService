import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorkLoginComponent } from './auth/login/stork-login.component';
import { StorkSignUpComponent } from './auth/signup/stork-sign-up.component';

const routes: Routes = [
  { path: '', component: StorkLoginComponent },
  { path: 'login', component: StorkLoginComponent },
  { path: 'sign-up', component: StorkSignUpComponent },
  {
    path: 'storks',
    loadChildren: './storks/storks.module#StorksModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
