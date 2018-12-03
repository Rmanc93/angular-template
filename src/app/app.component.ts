import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'btmd';
  constructor(private cookieService: CookieService, private router: Router) {
    if (!this.cookieService.check('UName')) {
      console.log("component");
      this.router.navigate(['./login']);
    }
  }
  componentAdded(component) {


    if (!this.cookieService.check('UName')) {
      console.log(component);
      this.router.navigate(['./login']);
    }

  }
}
