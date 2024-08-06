import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div [innerHTML]="userInput"></div>',
})
export class AppComponent {
  // Source: User input
  userInput: string = '<img src=x onerror=alert(1)>';
}
