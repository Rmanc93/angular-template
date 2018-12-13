import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }


  saveTask(task:any,accToken:string){
    console.log(accToken);
    
   
    return this.http.post("http://localhost:8080/MobileService/api/task",task,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+accToken)
    }
    );
  }
}
