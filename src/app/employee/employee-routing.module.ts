import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'list', component: EmployeelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
