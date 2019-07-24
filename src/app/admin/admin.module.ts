import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashBoardComponent]
})
export class AdminModule { }
