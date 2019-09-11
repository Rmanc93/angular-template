import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { StampCatalogService } from 'src/app/services/stamp-catalog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BasePath } from 'src/app/Utils/basepath';
import { StampService } from 'src/app/services/stamp.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-stamping',
  templateUrl: './stamping.component.html',
  styleUrls: ['./stamping.component.scss']
})
export class StampingComponent implements OnInit {

  
  employees = [];
  stmpctlg = [];
  public dateTime: Date;
  public dateTime1: Date;
  stampForm: FormGroup;

  constructor(
    private empService: EmployeeService,
    private stmpctlgService: StampCatalogService,
    private stampService: StampService,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.stampForm = fb.group({
      employee: ['', Validators.required],
      stampCatalog: ['', Validators.required],
      moblieDatetime: ['', Validators.required],
      superEmp: [ BasePath +'api/employees/'+ cookieService.get('id')]
    })
    empService.getEmployee().subscribe((res: any) => {
      this.employees = res._embedded.employees
    
      
    });

    stmpctlgService.getStampCatalog().subscribe((res:any)=>{
      this.stmpctlg = res._embedded.stampCatalogs
    })
  }
  
  ngOnInit() {
  }

  onSubmit(){
    if(this.stampForm.valid){
      console.log(this.stampForm.value);
      this.stampService.saveStamp(this.stampForm.value).subscribe(
        () =>{
          this._snackBar.open('', 'Fatto!', {
            duration: 2000,
          });
          this.router.navigate(['./adminstampingview'])
        }
      )
    }
   
    
  }
}
