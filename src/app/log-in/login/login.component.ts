import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  subscriptions: Subscription[] = [];

  logbtnclick = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private cookieService: CookieService,
    public dialog: MatDialog  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {}
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const subscription1: Subscription = this.loginService
      .getToken(this.loginForm.value)
      .pipe(
        flatMap((res: any) => {
          // console.log(res);

          this.cookieService.set(
            'at',
            res.access_token,
            null,
            '/',
            null,
            false
          );
          return this.loginService.getUserByUname(
            this.loginForm.get('username').value
          );
        })
      )
      .subscribe((res: any) => {
        // console.log('vvvvv',res);
        if (res != null) {
          this.cookieService.set('UName', res.username, null, '/', null, false);
          this.cookieService.set('type', res.role.role, null, '/', null, false);
          this.cookieService.set(
            'BName',
            res.branchName,
            null,
            '/',
            null,
            false
          );
          this.cookieService.set(
            'BCode',
            res.branchCode,
            null,
            '/',
            null,
            false
          );
           this.router.navigate(['./']);
        }
      },
       // tslint:disable-next-line: no-use-before-declare
       () => {  this.dialog.open(InvalidLoginErrorDialog); });

    // if (this.loginForm.invalid) {
    //   return;
    // }

    // this.logbtnclick=true;
    // const subscription: Subscription = this.loginService
    //   .getToken()
    //   .pipe(
    //     flatMap((res: any) => {
    //       return this.loginService.isUser(
    //         this.loginForm.value,
    //         res.access_token
    //       )
    //     })
    //   )
    //   .subscribe((json: any) => {

    //     console.log(json);

    //     this.logbtnclick=false;
    //     if (json != null) {
    //       this.cookieService.set("UName", json[0][0], null, "/", null, false);
    //       this.cookieService.set("type", json[0][2], null, "/", null, false);
    //       this.cookieService.set("BName", json[0][3], null, "/", null, false);
    //       this.cookieService.set("BCode", json[0][4], null, "/", null, false);
    //       this.cookieService.set("role",json[0][1],null,"/",null,false)

    //       this.comAccSer.getAccessToken(json[0][1]).subscribe((resacc:any)=>{
    //         // console.log(resacc);
    //         this.cookieService.set("at", resacc.access_token , null, "/", null, false);

    //                   })

    //                   this.router.navigate(["./"]);
    //     } else {
    //       this.dialog.open(InvalidLoginErrorDialog);
    //     }
    //   });
    // this.subscriptions.push(subscription);

    // const subscription1: Subscription = this.loginService.isUser(this.loginForm.value).subscribe((json: any) => {
    //     console.log('0000', json[0]);

    // })
    this.subscriptions.push(subscription1);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy(): void {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'invalid-login-error-dialog',
  templateUrl: 'invalid-login-error-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class InvalidLoginErrorDialog {
  constructor(public dialogRef: MatDialogRef<InvalidLoginErrorDialog>) {}

  onOkClick() {
    this.dialogRef.close();
  }
}
