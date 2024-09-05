import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/auth-model/login-response.model';
import { Login } from '../../models/auth-model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(data: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`https://qas-epha.thaioilgroup.com/Login/Authentication`, data);
  }
}
