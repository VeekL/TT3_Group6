import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}
    headersConfig={};
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token='QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ';

      if (token) {
        this.headersConfig['x-api-key'] = token;
      }
  
      console.log(this.headersConfig);
      const request = req.clone({ setHeaders: this.headersConfig });
      return next.handle(request);
    }
  }
  