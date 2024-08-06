import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="transferFunds()">Transfer Funds</button>
  `
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  transferFunds() {
    this.http.post('/transfer', { amount: 100 }).subscribe();
  }
}
