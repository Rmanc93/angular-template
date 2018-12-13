import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MedicalReportService {

  constructor(private http:HttpClient) { }

  getAll(accToken:string){
    
    return this.http.get("http://localhost:8080/MobileService/api/medicalreport",{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer  '+accToken)
    });
    
  }
}
