import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  constructor(private http: HttpClient, private router: Router) {}
  private authStatusListener = new Subject<boolean>();

  // Get the token
  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  // Get the CURRENT auth status of the user no matter what page they are on.
  getIsAuth() {
    return this.isAuthenticated;
  }

  createUser(
    fname: string,
    sname: string,
    address: string,
    phoneNumber: string,
    username: string,
    email: string,
    password: string,
    plan: string
  ) {
    const user: User = {
      fname: fname,
      sname: sname,
      address: address,
      phoneNumber: phoneNumber,
      username: username,
      email: email,
      password: password,
      plan: plan
    };
    this.http
      .post('http://localhost:3000/api/users/signup', user)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post<{ token: string }>(
        'http://localhost:3000/api/users/login',
        authData
      )
      .subscribe(response => {
        // Getting the token from the response data
        const token = response.token;
        this.token = token;
        if (token) {
          // Informing the Stork app that the user is logged in
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          // Navigate to the list of storks after login
          this.router.navigate(['/your-storks']);
        }
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    // Send the user back to the login screen after logging out
    this.router.navigate(['/login']);
  }
}
