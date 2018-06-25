import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListUsersComponent } from './list-users.component';

@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListUsersComponent
  ]
})
export class ListUsersComponentModule { }
