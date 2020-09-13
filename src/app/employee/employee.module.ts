import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { OthersModule } from '../others/others.module';


@NgModule({
  declarations: [EmployeeComponent, EmployeelistComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    OthersModule
  ]
})
export class EmployeeModule { }
