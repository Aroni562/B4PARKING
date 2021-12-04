import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = 'Campo inválido';
  user: User={name: '', email: '', password: '' };

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
