import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  template: `<input [(ngModel)]="userInput" placeholder="Enter something" />
             <button (click)="submit()">Submit</button>`
})
export class UserInputComponent {
  userInput: string = '';

  submit() {
    document.getElementById('output').innerHTML = this.userInput;
  }
}
