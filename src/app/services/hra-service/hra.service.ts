import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PageReq } from '../../models/page-req.model';
import { HraRes } from '../../models/hra-model/hra-res.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HraService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl

  getHra(data: PageReq): Observable<HraRes> {
    return this.http.post<HraRes>(`${this.apiUrl}/Flow/get_hra_details`, data);
  }
}
