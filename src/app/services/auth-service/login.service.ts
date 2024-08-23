import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/auth-model/login.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/auth-model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl

  login(data: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`https://qas-epha.thaioilgroup.com/Login/Authentication`, data);
  }
}
