import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IEmployee } from '../iemployee'

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee: IEmployee;
  constructor(private employeeService: EmployeeService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employee = {
          id: 1,
          names: "",
          location: "",
          email: "",
          mobile: ""
        };
    //let id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.activeRoute.paramMap.subscribe( (params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employee.id=id;
    });
    //this.employee.id=id;
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
    this.router.navigateByUrl('/employeelist');
  }
}