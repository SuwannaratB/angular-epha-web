import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    // Skip interceptor for a specific URL
    // if (req.url === 'https://qas-epha.thaioilgroup.com/Login/Authentication') {
    //   modifiedReq = req.clone({
    //     setHeaders: {
    //       'X-XSRF-TOKEN': token,
    //     }
    //   });
    //   return next.handle(modifiedReq);
    // }
    const token = this.authService.getToken();
    let modifiedReq = req;

    if (!req.url.startsWith('/domainProxy')) {
      if (token) {
        modifiedReq = req.clone({
          url: `/domainProxy${req.url}`,
          setHeaders: {
            'Authorization': `Bearer ${token}`,
          }
        });
      } else {
        modifiedReq = req.clone({
          url: `/domainProxy${req.url}`
        });
      }
    }

    return next.handle(modifiedReq);
  }
}
