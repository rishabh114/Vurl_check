import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div [innerHTML]="getUserInput()"></div>',
})
export class AppComponent {
  userInput: string = '<img src=x onerror=alert(1)>';

  getUserInput(): string {
    // Unsafe direct assignment, more detectable by static analysis tools
    return this.userInput;
  }
}
