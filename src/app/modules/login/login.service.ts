import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ResUser {
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(body: { email: string, password: string }): Observable<ResUser> {
    return this.httpClient.post<ResUser>('http://localhost:4200/users/login', body);
  }
}
