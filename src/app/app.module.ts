import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { APIInterceptor } from './Utils/APIInterceptor';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { JwtInterceptor } from './Utils/jwt.interceptor';
import { HttpModule } from '@angular/http';
import { MatDialogModule } from '@angular/material';
import { NgxViewerModule } from 'ngx-viewer';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImageViewerModule,
    MatDialogModule,
    NgxViewerModule

  ],
  providers: [CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
