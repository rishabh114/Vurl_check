import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="searchQuery">
    <button (click)="search()">Search</button>
  `
})
export class AppComponent {
  searchQuery = '';

  constructor(private http: HttpClient) {}

  search() {
    this.http.get(`https://api.example.com/search?query=${this.searchQuery}`).subscribe();
  }
}
