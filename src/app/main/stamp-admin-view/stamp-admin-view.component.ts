import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StampService } from 'src/app/services/stamp.service';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from 'src/app/services/employee.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-stamp-admin-view',
  templateUrl: './stamp-admin-view.component.html',
  styleUrls: ['./stamp-admin-view.component.scss']
})
export class StampAdminViewComponent implements OnInit {

  displayedColumns: string[] = ['StampinId', 'employee', 'name', 'StampinCode', 'StampSign', 'mobileTime', 'servrTime', 'SuperEmployee'];
  dataSource ;
  viewtable= false;
  option : number;
  fromDate : Date;
  toDate : Date;
  username='';
  body : HttpParams;
  search = false;

  employees = [];
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private stampService : StampService,
    private cookieService: CookieService,
    private empService: EmployeeService
  ) { 
    empService.getEmployee().subscribe((res: any) => {
      this.employees = res._embedded.employees
      console.log(res);
      
    
      
    });
  }

  OnSearch() {
    this.search = true;
    this.viewtable = true;
    if(this.fromDate && this.toDate && this.option==5){
      this.body =  new HttpParams()
      .set('username', this.username)
      .set('option', this.option.toString())
      .set('fromdate', this.fromDate.toLocaleString())
      .set('todate', this.toDate.toLocaleString())
    }else{

      this.body =  new HttpParams()
      .set('username', this.username)
      .set('option', this.option.toString())
      .set('fromdate', new Date().toLocaleString())
    }

if(this.username){
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
}else{
  this.stampService.getAllStampForDateRange(this.body).subscribe((res:any)=>{
    console.log(">>>>>>>>>",res);
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
   
        
  }

  exportAsExcel()
    {
      const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, 'zzzzzzz.xlsx');

    }



  ngOnInit() {
  }

}
