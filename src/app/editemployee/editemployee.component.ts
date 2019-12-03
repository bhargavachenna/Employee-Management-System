import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IEmployee } from '../iemployee'
import { EmployeesComponent } from '../employees/employees.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee: IEmployee;
  constructor(private employeeService: EmployeeService, private router: Router, private activeRoute: ActivatedRoute, private sharedService: SharedService, private titleService: Title) { }

  ngOnInit() {
    this.employee = {
          id: this.sharedService.id,
          names: "",
          location: "",
          email: "",
          mobile: ""
        };
  this.titleService.setTitle("Edit Employee");
  this.employeeService.getEmployee(this.employee.id).subscribe((data : IEmployee)=>{
        console.log(data);
        this.employee = data;
    })
  }
  editEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe(
      (ret)=>{
        console.log("Employee Updated", ret)
      }
    )
    this.router.navigateByUrl('/employees');
  }
}