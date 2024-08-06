import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="transferFunds()">Transfer Funds</button>
  `
})
export class AppComponent {
  csrfToken: string;

  constructor(private http: HttpClient) {
    // Retrieve CSRF token from server
  }

  transferFunds() {
    this.http.post('/transfer', { amount: 100 }, { headers: { 'X-CSRF-Token': this.csrfToken } }).subscribe();
  }
}
