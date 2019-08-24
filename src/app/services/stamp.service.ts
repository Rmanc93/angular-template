import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StampService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  saveStamp(stamp: any) {

    return this.http.post('api/stamps', stamp, {
    });
  }

  getStampUserForDateRange(body: HttpParams) {
    console.log(body);
    return this.http.get('api/userstampfordaterange', {
      params: body
    })
    
  }

  getAllStampForDateRange(body: HttpParams) {
    console.log(body);
    return this.http.get('api/allstampfordaternge', {
      params: body
    })
  }
}
