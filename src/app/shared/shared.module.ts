import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
//import { ModalService } from '../services/modal.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ModalComponent,
  ],
  exports: [ModalComponent],
  //providers: [ModalService]
})
export class SharedModule { }
