import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { IEmployee } from '../iemployee'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data : any[])=>{
        console.log(data);
        this.employees = data;
    })
  }
  public editEmployee(employeeId){
    this.router.navigate(['/employeelist', employeeId]);
  }
  public deleteEmployee(policyId){
    this.employeeService.deleteEmployee(policyId).subscribe((ret)=>{
          console.log("Employee deleted: ", ret);
    })
    this.employeeService.getEmployees().subscribe((data : any[])=>{
        console.log(data);
        this.employees = data;
    })
} 

}