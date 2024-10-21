import { Injectable } from '@angular/core';
import { PageReq } from '../../models/page-req.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TasksRes } from '../../models/tasks-model/tasks-res.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) {}

  get(data: PageReq): Observable<TasksRes> {
    return this.http.post<TasksRes>(`/Flow/load_home_tasks`, data);
  }
}
