import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { ModalService } from '../services/modal.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ModalComponent, TabsContainerComponent, TabComponent, InputComponent, ReactiveFormsModule
  ],
  exports: [ModalComponent],
  //providers: [ModalService]
})
export class SharedModule { }
