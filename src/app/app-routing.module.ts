import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from '../components/add-user/add-user.component';
import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { ListUsersComponent } from '../components/list-users/list-users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: ListUsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
