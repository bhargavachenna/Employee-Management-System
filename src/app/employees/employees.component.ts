import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { IEmployee } from '../iemployee'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[];
  filtered: string = "";
  employeeCount: number;

  constructor(private employeeService: EmployeeService, private router: Router, private sharedService: SharedService,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Employee List");
    this.employeeCount=this.sharedService.totalCount;
    this.employeeService.getEmployees().subscribe((data : IEmployee[])=>{
        console.log(data);
        this.employees = data;
    })
  }
  public editEmployee(employeeId){
    this.sharedService.id=employeeId;
    this.router.navigate(['/editEmployee']);
  }
  public deleteEmployee(employeeId){
      this.employeeService.deleteEmployee(employeeId).subscribe((ret)=>{
          console.log("Employee deleted: ", ret);
      })
    if(employeeId==this.sharedService.maxLength){
      this.sharedService.maxLength=this.sharedService.maxLength-1;
    }
    this.sharedService.totalCount = this.sharedService.totalCount-1;
    this.employeeCount=this.sharedService.totalCount;
    this.employeeService.getEmployees().subscribe((data : IEmployee[])=>{
        console.log(data);
        this.employees = data;
    })
  }
  public setEmployeeId(employeeId){
    this.sharedService.id=employeeId;
    this.router.navigate(['/viewemployee']);
  } 

}