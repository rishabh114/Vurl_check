import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  template: `<form [formGroup]="contactForm" (ngSubmit)="submit()">
               <input formControlName="name" placeholder="Name" />
               <input formControlName="email" placeholder="Email" />
               <textarea formControlName="message" placeholder="Message"></textarea>
               <button type="submit">Send</button>
             </form>`
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  submit() {
    this.http.post('http://example.com/api/contact', this.contactForm.value)
      .subscribe(response => {
        console.log('Form submitted successfully');
      });
  }
}
