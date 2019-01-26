import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

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
    const authData: AuthData = {
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
      .post('http://localhost:3000/api/users/signup', authData)
      .subscribe(response => {
        console.log(response);
      });
  }
}
