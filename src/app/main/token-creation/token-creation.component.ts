import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateFormatPipe } from 'src/app/Utils/date-pipe';
import { MedicalReportService } from 'src/app/services/medical-report.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { LabService } from 'src/app/services/lab.service';
import { CommonAccessService } from 'src/app/services/common-access.service';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-token-creation',
  templateUrl: './token-creation.component.html',
  styleUrls: ['./token-creation.component.scss']
})
export class TokenCreationComponent implements OnInit {
  
  dropdownSettings = {};
  taskCreationForm:FormGroup;
  proNo=124214214214;
  mediList=[];
  
  hospitalList$ :Observable<any>;
  labList$:Observable<any>;
  mediReportList$:Observable<any>;

  labList=[];


  
  constructor(
    private cookieService: CookieService,
    private fb:FormBuilder,
    private commonSer: CommonAccessService,
    private mediRepoSer:MedicalReportService,
    private hospSer:HospitalService,
    private labSer:LabService,
    private taskSer:TaskService
  ) {

    this.commonSer.getAccessToken().subscribe((res:any)=>{
      console.log(res.access_token);
    
      this.labList$=this.labSer.getAllLabs(res.access_token);
      this.mediReportList$=this.mediRepoSer.getAll(res.access_token);
      this.hospitalList$=this.hospSer.getAllHospital(res.access_token);
    });
    
    this.taskCreationForm = this.fb.group({
      mainType: [''],
      proposalNumber: [''],
      cusIDNo: [''],
      cname: [''],
      appointDate: [''],
      lab: [''],
      mediReports: [''],
      remarks:[''],
      comment:[''],
      uname:[this.cookieService.get('UName')],
      urole:[this.cookieService.get('type')]
    });

    this.taskCreationForm.get("proposalNumber").setValue(this.proNo); 

    

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,

    };
   }
  
  ngOnInit() {
     console.log(this.cookieService.get('role'));
    
  }
  onHospitalSelect(event:any){
    console.log('hospital select',event.target.value);

    this.labList=[];
    this.labList$.subscribe((res:any)=>{
      res.forEach((element:any) => {
        if(element.hosId==event.target.value){
          this.labList.push(element);
        }
      });
    })
    
  }

 

  onSubmit(){
    
    

    if(this.taskCreationForm.valid){

      // this.taskCreationForm.get("appointDate").setValue(this._dateFormatPipe.transform(this.taskCreationForm.get("appointDate").value));

    if(this.taskCreationForm.get("mediReports").value){
      this.taskCreationForm.get("mediReports").value.forEach(element => {
        this.mediList.push(element.id);
      });
    }
    this.taskCreationForm.get("mediReports").setValue(this.mediList);
    console.log(this.taskCreationForm.value);

      this.commonSer.getAccessToken().pipe(
        flatMap(
          (res:any)=>{
            return this.taskSer.saveTask(this.taskCreationForm.value,res.access_token)
          }
        )
      ).subscribe(res1=>{
        console.log(res1);
        this.taskCreationForm.reset();
        
      })
    }
    
  }
}
