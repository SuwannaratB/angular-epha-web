import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq = req;

    // Skip interceptor for a specific URL
    if (req.url === 'https://qas-epha.thaioilgroup.com/Login/Authentication') {
      return next.handle(req);
    }

    if (!req.url.startsWith('/domainProxy')) {
      modifiedReq = req.clone({
        url: `/domainProxy${req.url}`  // Add /api prefix
      });
    }

    // console.log('Intercepted Request:', modifiedReq); // Debugging in console

    return next.handle(modifiedReq);
  }
}
