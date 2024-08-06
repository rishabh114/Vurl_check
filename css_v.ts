import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Hardcoded password (vulnerable)
  private readonly hardcodedPassword = 'supersecretpassword';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    if (password === this.hardcodedPassword) {
      // Proceed with login logic
      return this.http.post('/api/login', { username, password });
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
