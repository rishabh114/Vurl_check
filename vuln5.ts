import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <input type="text" placeholder="Username" [(ngModel)]="username">
    <input type="password" placeholder="Password" [(ngModel)]="password">
    <button (click)="login()">Login</button>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // Simplified login logic
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/home']);
    }
  }
}
