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
  MatProgressBarModule
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
    NgxViewerModule

  ],
  declarations: [
    MainNavComponent,
    DashboardComponent,
    DialogComponent,
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class MainModule { }
