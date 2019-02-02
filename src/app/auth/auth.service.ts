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
  private tokenTimer: any;
  private userId: string;

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

  getUserId() {
    return this.userId;
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
    // this.router.navigate(['/your-storks']);
    this.http.post('http://localhost:3000/api/users/signup', user).subscribe(
      () => {},
      error => {
        this.authStatusListener.next(false);
      }
    );
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      // Getting the toke, expiry time and userId from the response:
      .post<{ token: string; expiresIn: number; userId: string }>(
        'http://localhost:3000/api/users/login',
        authData
      )
      .subscribe(response => {
        // Getting the token from the response data
        const token = response.token;
        this.token = token;
        if (token) {
          const expiredInDuration = response.expiresIn;
          this.setAuthTimer(expiredInDuration);
          // Informing the Stork app that the user is logged in
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          const currentDate = new Date();
          const experationDate = new Date(
            currentDate.getTime() + expiredInDuration * 1000
          );
          this.saveAuthData(token, experationDate, this.userId);
          console.log('experationDate: ' + experationDate);

          // Navigate to the list of storks after login
          this.router.navigate(['/your-storks']);
        }
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    // Send the user back to the login screen after logging out:
    this.router.navigate(['/login']);
    // Clear the local storage of the user token and experation date of that token:
    this.clearAuthData();
    // Clear userId on logout
    this.userId = null;
    // Clear timeout when we logout, manually or programmatically:
    clearTimeout(this.tokenTimer);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (authInformation != null) {
      // Verify the experationDate
      const now = new Date();
      // Getting the differnce between the experationDate and the current time:
      const expiresIn =
        authInformation.experationDate.getTime() - now.getTime();
      // if expiresIn is greater than 0 its in the future. If its 0 or less its right now of in the past.
      if (expiresIn > 0) {
        this.token = authInformation.token;
        this.isAuthenticated = true;
        this.userId = authInformation.userId;
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
      }
    } else {
      return;
    }
  }

  // Setting the token timeout
  private setAuthTimer(duration) {
    console.log('Setting Timer:' + duration);
    // this.logout will be called after 1 hour.
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  // Storing the token, experation date and userId to the users local storage.
  private saveAuthData(token: string, experationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('experation', experationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  // Storing the token, experation date and userId to the users local storage.
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('experation');
    localStorage.removeItem('userId');
  }

  // Getting the token, experation date and userId to the users local storage.
  private getAuthData() {
    const token = localStorage.getItem('token');
    const experationDate = localStorage.getItem('experation');
    const userId = localStorage.getItem('userId');
    if (!token || !experationDate) {
      return;
    } else {
      return {
        token: token,
        experationDate: new Date(experationDate),
        userId: userId
      };
    }
  }
}
