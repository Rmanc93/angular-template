import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BasePath } from '../Utils/basepath';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(
    private http:HttpClient,
    private cookieService: CookieService
    ) { }

  saveStamp(id : number){
   const body = new HttpParams()
   .set('employee',BasePath+'api/employees/'+this.cookieService.get('id'))
   .set('stampCatalog',BasePath+'api/stampCatalogs/'+id)
   .set('moblieDatetime',  new Date().toLocaleString());


const Json ={
  'employee': BasePath+'api/employees/'+this.cookieService.get('id'),
  'stampCatalog': BasePath+'api/stampCatalogs/'+id,
  'moblieDatetime':  new Date()
};

   return this.http.post('api/stamps',Json,
   {
     headers: new HttpHeaders()
     .set('Content-Type', 'application/json')
  }
   )
  }

  
}
