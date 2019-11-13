import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent
  }, {path : 'dash-board', component: DashboardComponent}];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
