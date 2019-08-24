import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  constructor(private qrService: QrService,private router:Router) { }

  onCodeResult(event) {
    
    this.qrService.saveStamp(event).subscribe(
      (res:any)=>{
        this.router.navigate(['./']);
      },
      (error:any)=>{ console.log(error);
      },
      () => {
      
    })
  }

  ngOnInit() {
  }

}
