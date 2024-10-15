import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  private decodeHtmlEntities(text: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
     
    const token = this.authService.getToken();

    let headers = req.headers
    .set('Content-Type', 'application/json');

    if (token) {
      headers = headers.set('X-CSRF-TOKEN', token.toString());
    } 

    const modifiedReq = req.clone({
      headers,
      url: environment.apiUrl + req.url,
      withCredentials: true
    });
    // proxy
    // if (!req.url.startsWith('/domainProxy')) {
    //   modifiedReq = modifiedReq.clone({
    //     url: `/domainProxy${req.url}`
    //   });

    //   if (token) {
    //     modifiedReq = modifiedReq.clone({
    //       setHeaders: {
    //         'X-CSRF-TOKEN': token.toString() 
    //       }
    //     });
    //   }
    // }

    return next.handle(modifiedReq)
  }
}