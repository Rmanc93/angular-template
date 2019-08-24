import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QrComponent } from './qr/qr.component';
import { StampingComponent } from './stamping/stamping.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { StampingViewComponent } from './stamping-view/stamping-view.component';
import { StampAdminViewComponent } from './stamp-admin-view/stamp-admin-view.component';
const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'qr', component: QrComponent },
      { path: 'stamping', component: StampingComponent },
      { path: 'stampingview', component: StampingViewComponent },
      { path: 'employees', component: EmployeeCreationComponent },
      { path: 'adminstampingview', component: StampAdminViewComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
