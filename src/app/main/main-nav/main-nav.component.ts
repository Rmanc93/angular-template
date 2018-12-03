import { Component, EventEmitter, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { roleList } from 'src/app/Utils/roleList';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  @ViewChild('drawer') drawer: MatSidenav;
  
  uname: string = '';
  taskList: any = "";
  roleList = roleList;



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private cookieService: CookieService) {
  }

  componentAdded(component) {
    if (!this.cookieService.check('UName')) {
      this.router.navigate(['./login']);
    }

    console.log(component.constructor.name=='LoginComponent');

    // if(component.constructor.name!='LoginComponent'){
      
    //   if(!this.isHandset$){
    //     this.sideNav=true;
    //   }
    //   if(this.drawer && !this.isHandset$){
    //     this.sideNav=true;
    //     this.drawer.open();
    //   }
      
    // }else{
    //   if(this.drawer){
    //     this.sideNav=false;
    //     this.drawer.close();
    //   }
      
    // }

    if (this.cookieService.check('UName')) {
      this.uname = this.cookieService.get('UName');
      console.log('bbxxx', this.taskList);
     
        console.log('bb', this.roleList);
        this.taskList = this.roleList[this.cookieService.get('type')];
      
    } else {
      this.router.navigate(['./']);
    }

  }

  onDeactivate(){
  
    }
  

}
