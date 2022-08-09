import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logIn(user: string, pass: string): string {
    if (pass == '1234') {
      localStorage.setItem('token', Math.random().toString(36).substring(2));
      
      if (user.toLowerCase() == 'admin') {
        localStorage.setItem('admin', 'admin');
        return 'admin';
      }

      return 'user';
    }
    return 'invalid';
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['/']);
  }
}
