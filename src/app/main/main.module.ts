import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MainRoutingModule } from './main-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TokenCreationComponent } from './token-creation/token-creation.component';

import { ProposalConfirmationComponent } from './proposal-confirmation/proposal-confirmation.component';
import { LabTaskComponent } from './lab-task/lab-task.component';
import { DoctorCommentsComponent } from './doctor-comments/doctor-comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    
    CommonModule,
    MainRoutingModule,
    MDBBootstrapModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    DlDateTimePickerDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatFormFieldModule,
    MatInputModule
    
  ],
  declarations: [MainNavComponent,
    TokenCreationComponent,
    LabTaskComponent,
    ProposalConfirmationComponent,
    DoctorCommentsComponent,
    DashboardComponent ]
})
export class MainModule { }
