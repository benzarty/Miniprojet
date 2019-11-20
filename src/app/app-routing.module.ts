import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {FormEventComponent} from './dashboard/Events/form-event/form-event.component';
import {MatNavComponent} from './mat-nav/mat-nav.component';
import {MatTableComponent} from './mat-table/mat-table.component';


const routes: Routes = [
  {path: '', component: LoginComponent
  }, {path: 'lol', component: MatNavComponent
  },

  {
    path: 'dashboard', component: DashboardComponent, children: [{
      path: 'formulaire', component: FormEventComponent}] }];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
