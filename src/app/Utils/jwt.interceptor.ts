import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor( private cookieService: CookieService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available


        const at = this.cookieService.get('at');
        if (at) {
            // console.log(at);
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${at}`
                }
            });
        }

        return next.handle(request);
    }
}
