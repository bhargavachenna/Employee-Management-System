import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './iemployee'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  server_url: string = '/api/'

  constructor(private httpClient : HttpClient) { }

  public getEmployees(){
    return this.httpClient.get(this.server_url+'employees');
  }
  public getEmployee(employeeId){
    return this.httpClient.get(`${this.server_url+'employees'}/${employeeId}`);
  }
  public createEmployee(employee: IEmployee){
      return this.httpClient.post(`${this.server_url+'employees'}`, employee)
  }

  public deleteEmployee(employeeId){
      return this.httpClient.delete(`${this.server_url+'employees'}/${employeeId}`)
  }
  public updateEmployee(employee: IEmployee){
      return this.httpClient.put(`${this.server_url+'employees'}/${employee.id}`, employee)
  }

}