import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { policies } from '../policies/policies.component'

const routes: Routes = [
  {path: 'employeelist', component: policies},
  //{path: 'addemployee'}
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