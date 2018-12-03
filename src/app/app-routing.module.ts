import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: 'login', loadChildren: './log-in/log-in.module#LogInModule' },
  {
    path: '', loadChildren: './main/main.module#MainModule'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
