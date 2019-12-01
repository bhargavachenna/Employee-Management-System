import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee: IEmployee;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee = {
          id: 1,
          names: "",
          location: "",
          email: "",
          mobile: ""
        };
  }
  createEmployee(){
    this.employee.id=7;
    console.log("Values changed",this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(
      (ret)=>{
        console.log("Employee Added", ret)
      }
    )
  }


}