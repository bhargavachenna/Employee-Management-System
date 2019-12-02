import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../employees/employees.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import {EditemployeeComponent } from '../editemployee/editemployee.component';
import {ViewemployeeComponent } from '../viewemployee/viewemployee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'viewemployee', component: ViewemployeeComponent},
  {path: 'editEmployee', component: EditemployeeComponent},
  {path: 'addEmployee', component: AddemployeeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [EmployeesComponent,AddemployeeComponent,EditemployeeComponent,ViewemployeeComponent];