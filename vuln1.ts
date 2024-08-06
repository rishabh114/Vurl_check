import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getUser(123)">Get User</button>
  `
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  getUser(userId: number) {
    this.http.get(`https://api.example.com/users/${userId}`).subscribe();
  }
}
