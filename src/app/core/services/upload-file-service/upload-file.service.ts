import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFile } from '../../models/upload-file-model/upload-file-res';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) {}

  uploadFile(data: FormData): Observable<{msg: UploadFile[]}> {
    return this.http.post<{msg: UploadFile[]}>(`/Flow/uploadfile_data`, data);
  }
}
