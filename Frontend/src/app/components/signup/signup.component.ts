import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorMessage = 'Campo inválido';
  user: User = { name: '', email: '', password: '' };

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.userService.createUser(form.value).subscribe((user) => {
      this.router.navigate(['/login']);
    });
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}
