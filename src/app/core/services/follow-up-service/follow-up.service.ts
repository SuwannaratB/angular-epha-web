import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FollowUpRes } from '../../models/follow-up-model/follow-up-res.model';
import { FollowUpReq } from '../../models/follow-up-model/follow-up-req.model';


@Injectable({
  providedIn: 'root'
})
export class FollowUpService {

  constructor(private http: HttpClient) {}

  get(data:FollowUpReq): Observable<FollowUpRes> {
    return this.http.post<FollowUpRes>(`/Flow/load_follow_up`, data);
  }
}
