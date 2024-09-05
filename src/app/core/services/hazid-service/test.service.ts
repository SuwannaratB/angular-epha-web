import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../../core/models/test.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl

  post(data:Test): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/MasterData/get_master_group_list`, data);
  }
}
