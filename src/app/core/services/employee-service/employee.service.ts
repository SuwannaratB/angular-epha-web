import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRes } from '../../models/employee-model/employee-res.model';
import { EmployeeReq } from '../../models/employee-model/employee-req.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getEmployee(data: EmployeeReq): Observable<EmployeeRes> {
    return this.http.post<EmployeeRes>(`/Flow/employees_search`, data);
  }
}
