import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { IEmployee } from "../iemployee";
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-addemployee",
  templateUrl: "./addemployee.component.html",
  styleUrls: ["./addemployee.component.css"]
})
export class AddemployeeComponent implements OnInit {
  employee: IEmployee;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private sharedService: SharedService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.employee = {
      id: 1,
      names: "",
      location: "",
      email: "",
      mobile: ""
    };
    this.titleService.setTitle("Add Employee");
  }
  createEmployee() {
    this.employee.id = this.sharedService.maxLength + 1;
    this.sharedService.maxLength = this.employee.id;
    console.log("Values changed", this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(ret => {
      console.log("Employee Added", ret);
    });
    this.sharedService.totalCount = this.sharedService.totalCount + 1;
    this.router.navigateByUrl("/employees");
  }
}
