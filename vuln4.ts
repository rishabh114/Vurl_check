import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>User ID: {{ userId }}</p>
    <p>Credit Card: **** **** **** 1234</p>
  `
})
export class ProfileComponent {
  userId = 123;
  creditCard = '1234567890123456';
}
