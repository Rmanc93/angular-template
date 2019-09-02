import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatMenuModule,
  MatRadioModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatDialogModule,
  MatCardModule,
  MatChipsModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule, } from 'ng-pick-datetime';
import { MainRoutingModule } from './main-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';



import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { NgxViewerModule } from 'ngx-viewer';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrComponent } from './qr/qr.component';
import { StampingComponent } from './stamping/stamping.component';
import { StampingViewComponent } from './stamping-view/stamping-view.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { StampAdminViewComponent } from './stamp-admin-view/stamp-admin-view.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
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
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,
    NgxViewerModule,
    ZXingScannerModule

  ],
  declarations: [
    MainNavComponent,
    DashboardComponent,
    DialogComponent,
    QrComponent,
    StampingComponent,
    EmployeeCreationComponent,
    StampingViewComponent,
    StampAdminViewComponent,
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class MainModule { }
