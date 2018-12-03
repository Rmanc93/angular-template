import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams,  HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  isUser(user:any,token:string):Observable<any>{
    
    
    const body = new HttpParams()
    .set('username', user.username)
    .set('password', user.password)
    .set('access_token', token);
   return this.http.post("http://localhost:8080/MobileService/api/formSubmit",body.toString(),
   {
     headers: new HttpHeaders()
       .set('Content-Type', 'application/x-www-form-urlencoded')
   });
  }

  getToken(){
    
    
    const body = new HttpParams()
    .set('grant_type', 'client_credentials');
    
   return this.http.post("http://localhost:8080/MobileService/oauth/token",body.toString(),
   {
     headers: new HttpHeaders()
     .set('Content-Type', 'application/x-www-form-urlencoded')
     .set('Authorization', 'Basic YWxBSHBVc2VyTGFiOmFsaUEyMGxhYiMxMjU=')
   });
  }

}
