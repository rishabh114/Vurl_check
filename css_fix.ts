import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<div [innerHTML]="getSanitizedUserInput()"></div>',
})
export class AppComponent {
  userInput: string = '<img src=x onerror=alert(1)>';

  constructor(private sanitizer: DomSanitizer) {}

  getSanitizedUserInput(): SafeHtml {
    // Sanitize the user input to prevent XSS
    return this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }
}
