import { Component } from '@angular/core';

@Component({
  selector: 'app-debug',
  template: `<button (click)="debug()">Debug</button>`
})
export class DebugComponent {
  private sensitiveData = 'SecretData123';

  debug() {
    console.log('Sensitive Data:', this.sensitiveData);
  }
}
