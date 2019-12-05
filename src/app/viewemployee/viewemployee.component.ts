import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { IEmployee } from '../iemployee'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  employee: IEmployee;

  constructor(private employeeService: EmployeeService, private router: Router, private sharedService: SharedService,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Employee Details");
    this.employee = {
          id: this.sharedService.id,
          names: "",
          location: "",
          email: "",
          mobile: ""
        };
    this.employeeService.getEmployee(this.employee.id).subscribe((data : IEmployee)=>{
        console.log(data);
        this.employee = data;
    })
  }

}