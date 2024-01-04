import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name = new FormControl('', [Validators.required, Validators.minLength(3)])
  email = new FormControl('')
  password =  new FormControl('')
  confirm_password = new FormControl('')
  phoneNumber = new FormControl('')

  registerForm = new FormGroup({

    name: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber

  })

}
