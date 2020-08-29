import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Models
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com';

  token: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  login(userLogin: string, pass: string): Observable<User> {
    return this.httpClient.post<User>(
      this.urlBase + '/login',
      {
        user: userLogin,
        password: pass
      }
    );
  }
}
