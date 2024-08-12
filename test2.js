import { Component } from '@angular/core';

@Component({
  selector: 'app-xss-vulnerable',
  template: `
    <h2>Vulnerable XSS Example</h2>
    <input [(ngModel)]="userInput" placeholder="Enter content here">
    <button (click)="updateContent()">Update Content</button>
    <div [innerHTML]="userInput"></div>
  `
})
export class XssVulnerableComponent {
  constructor() {
    this.userInput = '';
  }

  updateContent() {
    // Here, userInput is directly bound to innerHTML, leading to XSS vulnerability
  }
}
