import { OutletComponent } from './components/#outlet/outlet.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
    children: [
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
