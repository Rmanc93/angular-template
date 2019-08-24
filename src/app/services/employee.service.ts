import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http : HttpClient,
    private cookieService: CookieService
    ) { }

  getEmployee(){
    return this.http.get('api/employees',{
    });
  }
  
  saveEmployee(obj:any){
    return this.http.post('api/employees',obj,{
    });
  }
}
