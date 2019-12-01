import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data : any[])=>{
        console.log(data);
        this.employees = data;
    })
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