import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StampService } from 'src/app/services/stamp.service';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from 'src/app/services/employee.service';
import * as XLSX from 'xlsx';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-stamp-admin-view',
  templateUrl: './stamp-admin-view.component.html',
  styleUrls: ['./stamp-admin-view.component.scss']
})
export class StampAdminViewComponent implements OnInit {

  displayedColumns: string[] = ['StampinId', 'employee', 'name', 'StampinCode', 'StampSign', 'mobileTime', 'servrTime', 'SuperEmployee'];
  dataSource;
  displayedColumnsPdf: string[] = ['Stampin Id', 'Employee', 'Name', 'Stampin Code', 'Stamp Sign', 'Mobile Time', 'Server Time', 'Super Employee'];
  displayedColumnsPdfitl: string[] =['ID timbratura','Dipendente','Nome dipendente','Codice di timbratura','Segno di timbratura',
  'Data e ora cellulare','Orario del server','Dipendente Super']
  pdfData = [];
  filterdPdfData = [];
  viewtable = false;
  option;
  fromDate: Date;
  toDate: Date  = new Date();
  today: Date = new Date();
  username = '';
  body: HttpParams;
  search = false;
  fileName = '';
  startDate: Date;
  endDate: Date;
 



  employees = [];
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private stampService: StampService,
    public cookieService: CookieService,
    private empService: EmployeeService
  ) {
    empService.getEmployee().subscribe((res: any) => {
      this.employees = res._embedded.employees
      



    });
  }

  OnSearch() {
    this.search = true;
    this.viewtable = true;
    if (this.fromDate && this.toDate && this.option == 5) {
      this.body = new HttpParams()
        .set('username', this.username)
        .set('option', this.option.toString())
        .set('fromdate', this.fromDate.toLocaleString())
        .set('todate', this.toDate.toLocaleString())
    } else {

      this.body = new HttpParams()
        .set('username', this.username)
        .set('option', this.option.toString())
        .set('fromdate', new Date().toLocaleString())
    }

    if (this.username) {
      this.stampService.getStampUserForDateRange(this.body).subscribe((res: any) => {


        if (res.length > 0) {
          this.viewtable = true;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        } else {
          this.dataSource = new MatTableDataSource([]);
          this.dataSource.paginator = this.paginator;
        }

      });
    } else {
      this.stampService.getAllStampForDateRange(this.body).subscribe((res: any) => {

        if (res.length > 0) {
          this.viewtable = true;
          this.pdfData = res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        } else {
          this.pdfData = [];
          this.dataSource = new MatTableDataSource([]);
          this.dataSource.paginator = this.paginator;
        }

      });

    }


  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.getFileName()+'.xlsx');

  }



  ngOnInit() {
  }

  getTableData() {
    this.filterdPdfData = [];
    this.pdfData.forEach(a => {
      if (a.superEmp) {
        this.filterdPdfData.push(
          [a.id, a.employee.username, a.employee.name + " " + a.employee.sName, a.stampCatalog.code, a.stampCatalog.singType, (new DatePipe('en-US').transform(a.moblieDatetime, 'medium')).toString(), (new DatePipe('en-US').transform(a.serverDate, 'medium')).toString(), a.superEmp.username])
      } else {
        this.filterdPdfData.push(
          [a.id, a.employee.username, a.employee.name + " " + a.employee.sName, a.stampCatalog.code, a.stampCatalog.singType, (new DatePipe('en-US').transform(a.moblieDatetime, 'medium')).toString(), (new DatePipe('en-US').transform(a.serverDate, 'medium')).toString(), '-'])
      }

    })
    return this.filterdPdfData;
  }

  getFileName() {
    this.fileName = '';

    if (this.username) {
      this.fileName = this.username + '_';
    } else {
      this.fileName = 'allusers_';
    }


    switch (this.option) {
      case '1' : {
        this.fileName =  this.fileName  + 'OneDay' + '_' + ( new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy')).toString()
        break;
      }
      case '2' : {
        this.fileName =  this.fileName  + 'OneWeek' + '_' + ( new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy')).toString()
        break;
      }
      case '3' : {
        
        this.fileName =  this.fileName  + 'OneMonth' + '_' + ( new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy')).toString()
        break;
      }
      case '4' : {
        this.fileName =  this.fileName  + 'OneYear' + '_' + ( new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy')).toString()
        break;
      }
      case '5' : {
        this.fileName =  
        this.fileName  + 'Customize' 
        + '_from_' + ( new DatePipe('en-US').transform(this.fromDate, 'dd-MM-yyyy')).toString()
        + '_to_' + ( new DatePipe('en-US').transform(this.toDate, 'dd-MM-yyyy')).toString()
        break;
      }
      default: {
        this.fileName =  this.fileName  + '_x_' + ( new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy')).toString()
        break;
      }
    }
    return this.fileName;
  }

  downloadPDF() {
    // let doc = new jsPDF('l', 'pt');
    
    var doc = new jsPDF('l', 'pt', 'a3');

    // @ts-ignore
    doc.autoTable(this.displayedColumnsPdfitl, this.getTableData()); // typescript compile time error
    doc.save(this.getFileName()+'.pdf');
  }

}
