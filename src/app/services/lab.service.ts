import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http:HttpClient) { }

  getAllLabs(accToken:string){
    return this.http.get("http://localhost:8080/MobileService/api/lab",{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer  '+accToken)
    });
  }
}
