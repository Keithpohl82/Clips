import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideEnvironmentNgxMask, NGX_MASK_CONFIG, provideNgxMask } from 'ngx-mask';
//import { ModalService } from '../services/modal.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ModalComponent, TabsContainerComponent, TabComponent, InputComponent, ReactiveFormsModule, NgxMaskDirective
  ],
  exports: [ModalComponent],
  providers: [provideNgxMask()]
  //providers: [ModalService]
})
export class SharedModule { }
