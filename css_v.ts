import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `<input [(ngModel)]="username" placeholder="Username" />
             <input [(ngModel)]="password" placeholder="Password" type="password" />
             <button (click)="login()">Login</button>`
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem('token', response.token);
    });
  }
}
