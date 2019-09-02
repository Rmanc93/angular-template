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
    public dialog: MatDialog) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() { }
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
          return this.loginService.getUserByUname();
        })
      )
      .subscribe((res: any) => {
        if (res != null) {
          this.cookieService.set('UName', res.username, null, '/', null, false);
          this.cookieService.set('type', res.role.name, null, '/', null, false);
          this.cookieService.set('id', res.id, null, '/', null, false);
          this.cookieService.set('lng', 'eng', null, '/', null, false);
          if (res.role.name === 'ROLE_ADMIN') {
            this.router.navigate(['./adminstampingview']);
          } else { this.router.navigate(['./stampingview']); }
        }
      },
        // tslint:disable-next-line: no-use-before-declare
        () => { this.dialog.open(InvalidLoginErrorDialog); });

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
  constructor(public dialogRef: MatDialogRef<InvalidLoginErrorDialog>) { }

  onOkClick() {
    this.dialogRef.close();
  }
}
