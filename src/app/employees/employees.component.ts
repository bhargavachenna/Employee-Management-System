import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { IEmployee } from '../iemployee'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[];
  uniqueId: string;
  constructor(private employeeService: EmployeeService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data : any[])=>{
        console.log(data);
        this.employees = data;
    })
  }
  public editEmployee(employeeId){
    this.sharedService.id=employeeId;
    this.router.navigate(['/editemployee']);
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