import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl(''),
    AggregateErrorpassword: new FormControl(''),
    confirm_password: new FormControl(''),
    phoneNumber: new FormControl('')
  })

}
