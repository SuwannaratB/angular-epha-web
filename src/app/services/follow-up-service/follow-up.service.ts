import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FollowUp } from '../../models/follow-up-model/follow-up.model';
import { Observable } from 'rxjs';
import { FollowUpRes } from '../../models/follow-up-model/follow-up-res.model';
import { FollowUpReq } from '../../models/follow-up-model/follow-up-req.model';

@Injectable({
  providedIn: 'root'
})
export class FollowUpService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl

  get(data:FollowUpReq): Observable<FollowUpRes> {
    return this.http.post<FollowUpRes>(`${this.apiUrl}/Flow/load_follow_up`, data);
  }
}
