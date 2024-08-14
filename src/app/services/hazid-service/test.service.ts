import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  post(data:Test): Observable<any> {
    return this.http.post<any>(`https://qas-epha.thaioilgroup.com/service/api/MasterData/get_master_group_list`, data);
  }
}
