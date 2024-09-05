import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HraRes } from '../../models/hra-model/hra-res.model';
import { PageReq } from '../../models/page-req.model';
import { HraSaveReq } from '../../models/hra-model/hra-save-req.model';

@Injectable({
  providedIn: 'root'
})
export class HraService {

  constructor(private http: HttpClient) {}

  getHra(data: PageReq): Observable<HraRes> {
    return this.http.post<HraRes>(`/Flow/get_hra_details`, data);
  }

  setHra(data: HraSaveReq): Observable<any> {
    return this.http.post<any>(`/Flow/set_hra`, data);
  }
}
