import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  taskList1 = [];
   constructor(
    private router: Router,
    private cookieService: CookieService,
    iconRegistry: MatIconRegistry,
     sanitizer: DomSanitizer
    ) {
      iconRegistry.addSvgIcon(
        'baseline-thumb_up-24px',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/baseline-thumb_up-24px.svg'));

    if (this.cookieService.check('UName')) {




      // const index = this.taskList1.findIndex((x: any) => x.task == "Home");
      // if (index > -1) {
      //   this.taskList1.splice(index, 1)
      // }
      // console.log(this.roleList1);
    } else {
      this.router.navigate(['./login']);
    }


  }


  ngOnInit() {}
}
