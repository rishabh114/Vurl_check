import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `<button (click)="navigate()">Go</button>`
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navigate() {
    const userInput = prompt('Enter a route'); // User-provided input for navigation
    this.router.navigate([userInput]);
  }
}
