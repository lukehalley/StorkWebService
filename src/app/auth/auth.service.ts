import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string;
  constructor(private http: HttpClient) {}
  private authStatusListener = new Subject<boolean>();

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
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
        // Informing the Stork app that the user is logged in
        this.authStatusListener.next(true);
      });
  }
}
