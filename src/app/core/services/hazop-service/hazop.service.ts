import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HazopRes } from '../../models/hazop-model/hazop-res.model';
import { PageReq } from '../../models/page-req.model';

@Injectable({
  providedIn: 'root'
})
export class HazopService {

  constructor(private http: HttpClient) {}

  getHazop(data: PageReq): Observable<HazopRes> {
    return this.http.post<HazopRes>(`/Flow/get_hazop_details`, data);
  }

  // setHazop(data: HraSaveReq): Observable<any> {
  //   return this.http.post<any>(`/Flow/set_hra`, data);
  // }
}
