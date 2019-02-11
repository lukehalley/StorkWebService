import { AuthGuard } from './../auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StorkListComponent } from './stork-list/stork-list.component';
import { StorkCreateComponent } from './stork-create/stork-create.component';

const routes: Routes = [
  {
    path: 'your-storks',
    component: StorkListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register-stork',
    component: StorkCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:storkId',
    component: StorkCreateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorkRoutingModule {}
