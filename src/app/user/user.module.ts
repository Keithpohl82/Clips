import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AuthModalComponent, SharedModule, ReactiveFormsModule, FormsModule
  ],
  exports: [AuthModalComponent]
})
export class UserModule { }
