import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRes } from '../../models/auth-model/login-res.model';
import { LoginReq } from '../../models/auth-model/login-req.model';
import { TokenReq } from '../../models/token-model/token-req.model';
import { TokenRes } from '../../models/token-model/token-res.model';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'user';

  constructor(private http: HttpClient) {}
  // Token
  setToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): String {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  }

  // User
  setUser(user: User): void {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  getUser(): User {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  clearUser(): void {
    localStorage.removeItem(this.storageKey);
  }

  // API
  fetchToken(data: TokenReq): Observable<TokenRes> {
    return this.http.post<TokenRes>(`/Login/GetAntiForgeryToken`, data);
  }

  login(data: LoginReq): Observable<User[]> {
    return this.http.post<User[]>(`/Login/check_authorization`, data);
  }
}
