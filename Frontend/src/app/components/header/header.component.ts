import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  isLogin = false;
  userId: string = '';
  username: string = '';

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.isLogin = this.userService.getIsAuthenticated();
    this.userId = this.userService.getUserId();

    this.userService.getUser(this.userId).subscribe((user) => {
      this.username = user.username;
    });
  }

  onLogout() {
    this.username = '';
    this.userService.logout();
  }

}
