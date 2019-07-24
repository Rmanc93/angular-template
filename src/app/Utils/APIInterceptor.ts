import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const apiReq = req.clone({ url: `http://10.71.65.172:8080/MobileService/${req.url}` });
    return next.handle(apiReq).pipe(
      retry(3),
      catchError(err => {
      if (err.status === 401) {

        if ( this.cookieService.getAll()) {

        }

         this.cookieService.deleteAll('/');
         this.router.navigate(['./login']);

      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }));
  }
}
