import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditUserComponent } from './edit-user.component';

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
  ],
  exports: [
    EditUserComponent
  ]
})
export class EditUserComponentModule { }
