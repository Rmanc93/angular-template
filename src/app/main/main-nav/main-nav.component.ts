import { Component, EventEmitter, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  @ViewChild('drawer') drawer: MatSidenav;

  uname = '';
  taskList: any = '';

  options: FormGroup;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private cookieService: CookieService,
    fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });

    if (!this.cookieService.check('UName')) {
      this.router.navigate(['./login']);
    }
  }

  componentAdded(component) {
    if (!this.cookieService.check('UName')) {
      this.router.navigate(['./login']);
    }

    // tslint:disable-next-line: triple-equals

    //  if(component.constructor.name!='LoginComponent'){

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

    } else {
      this.router.navigate(['./login']);
    }

  }

  logOut() {

    this.cookieService.deleteAll('/');


    this.router.navigate(['./login']);
  }

  onDeactivate() {

  }


}
