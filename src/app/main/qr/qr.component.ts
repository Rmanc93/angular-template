import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  constructor(private qrService: QrService,private router:Router,private snackbar: MatSnackBar) { }

  onCodeResult(event) {
    
    this.qrService.saveStamp(event).subscribe(
      (res:any)=>{
        this.snackbar.open('', 'Fatto!', {
          duration: 2000,
        });
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
