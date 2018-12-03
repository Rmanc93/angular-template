import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

  loginForm: FormGroup;
  subscriptions: Subscription[] = [];


  constructor(
      private formBuilder: FormBuilder, 
      private route: ActivatedRoute, 
      private router: Router, 
      private loginService: LoginService,
      private cookieService: CookieService) {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

     
      
  }
  ngOnInit() {
      
  }
  onSubmit() {


      if (this.loginForm.invalid) {
          return;
      }

     
      
      const subscription: Subscription = this.loginService.getToken().pipe(
          flatMap((res:any)=>{
              return this.loginService.isUser(this.loginForm.value,res.access_token)
          })
      ).subscribe((json:any)=>{
          
        console.log(json);
          if(json!=null){
              console.log(json);
              
              this.cookieService.set('role',json[0][1],null,'/',null,false);
              this.cookieService.set('UName',json[0][0],null,'/',null,false);
              this.cookieService.set('type',json[0][2],null,'/',null,false);
              this.router.navigate(['./']);
          }
          
      })
      this.subscriptions.push(subscription);

      // const subscription1: Subscription = this.loginService.isUser(this.loginForm.value).subscribe((json: any) => {
      //     console.log('0000', json[0]);

      // })
      // this.subscriptions.push(subscription1);
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(element => {
          element.unsubscribe();
      });


  }

}
