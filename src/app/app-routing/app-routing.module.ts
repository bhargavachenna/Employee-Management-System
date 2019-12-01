import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from '../policies/policies.component';

const routes: Routes = [
  {path: 'employeelist', component: PoliciesComponent},
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
export const routingComponents = [PoliciesComponent];