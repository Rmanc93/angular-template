import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http : HttpClient,
    private cookieService: CookieService
    ) { }
    
    getTasks(){
      return this.http.get('api/tasks',{
      });
    }
}
