import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeReq } from '../../models/employee-model/employee-req.model';
import { EmployeeRes } from '../../models/employee-model/employee-res.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl

  getEmployee(data: EmployeeReq): Observable<EmployeeRes> {
    return this.http.post<EmployeeRes>(`${this.apiUrl}/Flow/employees_search`, data);
  }
}
