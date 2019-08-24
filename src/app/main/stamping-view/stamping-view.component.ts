import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StampService } from 'src/app/services/stamp.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-stamping-view',
  templateUrl: './stamping-view.component.html',
  styleUrls: ['./stamping-view.component.scss']
})
export class StampingViewComponent implements OnInit {

  displayedColumns: string[] = ['StampinId', 'StampinCode', 'StampSign', 'Time', 'SuperEmployee'];
  dataSource ;
  viewtable= false;
  user = '';
  option : number;
  fromDate : Date;
  toDate : Date;
  
  body : HttpParams;
  search = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private stampService : StampService,
    private cookieService: CookieService
  ) { 
     
  }

  OnSearch() {
    this.search = true;
    this.viewtable = true;
    if(this.fromDate && this.toDate && this.option==5){
      this.body =  new HttpParams()
      .set('username', this.cookieService.get('UName'))
      .set('option', this.option.toString())
      .set('fromdate', this.fromDate.toLocaleString())
      .set('todate', this.toDate.toLocaleString())
    }else{

      this.body =  new HttpParams()
      .set('username', this.cookieService.get('UName'))
      .set('option', this.option.toString())
      .set('fromdate', new Date().toLocaleString())
    }


    this.stampService.getStampUserForDateRange(this.body).subscribe((res:any)=>{
      if(res.length > 0){
        this.viewtable = true;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      }else{
        this.dataSource = new MatTableDataSource([]);
        this.dataSource.paginator = this.paginator;
      }
     
    });
        
  }

  ngOnInit() {
  }

}
