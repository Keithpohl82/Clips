import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  }

  login() {
    console.log(this.credentials)
  }
}
