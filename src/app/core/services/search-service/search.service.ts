import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageReq } from '../../models/page-req.model';
import { SearchRes } from '../../models/search-model/search-res.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  get(data: PageReq): Observable<SearchRes> {
    return this.http.post<SearchRes>(`/Flow/load_page_search_details`, data);
  }
}
