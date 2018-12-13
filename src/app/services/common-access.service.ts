import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CommonAccessService {

  constructor(private http:HttpClient,private cookieService: CookieService) { }

  getAccessToken(){
    const body = new HttpParams()
    .set('grant_type', 'client_credentials');
    
   return this.http.post("http://localhost:8080/MobileService/oauth/token",body.toString(),
   {
     headers: new HttpHeaders()
     .set('Content-Type', 'application/x-www-form-urlencoded')
     .set('Authorization', 'Basic '+this.cookieService.get("role"))
   });
  }
}
