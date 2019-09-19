import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // isUser(user: any, token: string): Observable<any> {


  //   const body = new HttpParams()
  //     .set('username', user.username)
  //     .set('password', user.password)
  //     .set('access_token', token);
  //   return this.http.post('api/formSubmit', body.toString(),
  //     {
  //       headers: new HttpHeaders()
  //         .set('Content-Type', 'application/x-www-form-urlencoded')
  //     });
  // }

  getToken(user: any) {


    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', user.username)
      .set('password', user.password);


    // const body = new HttpParams()
    // .set('grant_type', 'client_credentials');

    return this.http.post('oauth/token', body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Basic aXN0Q2xpZW50OmlzdFNlY3JldA==')
      });
  }

  getUserByUname() {
    return this.http.get('api/owndetails', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.cookieService.get('at'))
    });
  }


}
