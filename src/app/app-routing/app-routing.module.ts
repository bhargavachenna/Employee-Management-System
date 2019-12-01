import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../employees/employees.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';

const routes: Routes = [
  {path: 'employeelist', component: EmployeesComponent},
  {path: 'addemployee', component: AddemployeeComponent}
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
export const routingComponents = [EmployeesComponent,AddemployeeComponent];