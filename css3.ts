import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deserialization',
  template: `<button (click)="fetchData()">Fetch Data</button> <p>{{data}}</p>`
})
export class DeserializationComponent {
  constructor(private http: HttpClient) {}
  public data:any = ''
  fetchData() {
    this.http.get('/api/data').subscribe(response => {
      // Directly deserializing data from the server
      this.data = response;
      //const deserializedData = JSON.parse(response as any); // Sink: Insecure deserialization
      //console.log('Deserialized Data:', deserializedData);
    });
  }
}
