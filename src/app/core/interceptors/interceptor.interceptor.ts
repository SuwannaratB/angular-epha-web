import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
     
    const token = this.authService.getToken();
    let modifiedReq = req.clone({
      withCredentials: true
    });

    if (!req.url.startsWith('/domainProxy')) {
      modifiedReq = modifiedReq.clone({
        url: `/domainProxy${req.url}`
      });

      if (token) {
        modifiedReq = modifiedReq.clone({
          setHeaders: {
            'X-CSRF-TOKEN': token.toString() 
          }
        });
      }
    }

    return next.handle(modifiedReq)
  }
}
// headers: {
//   'X-CSRF-TOKEN': $scope.token
// },
// xhrFields: {
//   withCredentials: true // เปิดการส่ง Cookie ไปพร้อมกับคำขอ
// }