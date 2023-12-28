import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  
})
export class ModalComponent {

  @Input() modalID = ''

  constructor(public modal: ModalService) {

  }

  closeModal() {
    this.modal.toggleModal(this.modalID)
  }

}
