import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user.component';

@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
  ],
  exports: [
    AddUserComponent
  ]
})
export class AddUserComponentModule { }
