import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorkListComponent } from './storks/stork-list/stork-list.component';
import { StorkCreateComponent } from './storks/stork-create/stork-create.component';

const routes: Routes = [
  { path: 'your-storks', component: StorkListComponent },
  { path: 'register-stork', component: StorkCreateComponent },
  { path: 'edit/:storkId', component: StorkCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
