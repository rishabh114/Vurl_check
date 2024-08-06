import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<div [innerHTML]="safeHtml"></div>',
})
export class AppComponent {
  // Source: User input
  userInput: string = '<img src=x onerror=alert(1)>';
  // Sink: Sanitized HTML
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    // Sanitizing the user input
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }
}
