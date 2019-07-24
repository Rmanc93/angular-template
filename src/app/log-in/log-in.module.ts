import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, InvalidLoginErrorDialog } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogModule, MatProgressBarModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    MatToolbarModule,
    MatDialogModule,
    MatProgressBarModule
    
  ],
  declarations: [LoginComponent,InvalidLoginErrorDialog],
  entryComponents:[InvalidLoginErrorDialog]
})
export class LogInModule { }
