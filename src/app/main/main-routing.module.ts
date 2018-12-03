import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TokenCreationComponent } from './token-creation/token-creation.component';
import { ProposalConfirmationComponent } from './proposal-confirmation/proposal-confirmation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabTaskComponent } from './lab-task/lab-task.component';
import { DoctorCommentsComponent } from './doctor-comments/doctor-comments.component';

const routes: Routes = [
  { path: '', component: MainNavComponent , children: [
    { path: '', component: DashboardComponent },
    { path: 'tokencreation', component: TokenCreationComponent },
    { path: 'labtask', component: LabTaskComponent },
    { path: 'propconf', component: ProposalConfirmationComponent },
    { path: 'doctcomm', component: DoctorCommentsComponent }
  ]  }
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
