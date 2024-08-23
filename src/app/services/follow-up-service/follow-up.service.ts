import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FollowUp } from '../../models/follow-up-model/follow-up.model';
import { Observable } from 'rxjs';
import { FollowUpResponse } from '../../models/follow-up-model/follow-up-response.model';

@Injectable({
  providedIn: 'root'
})
export class FollowUpService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl

  get(data:FollowUp): Observable<FollowUpResponse> {
    return this.http.post<FollowUpResponse>(`${this.apiUrl}/Flow/load_follow_up`, data);
  }
}
