import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  employees: IEmployee[];
  constructor() { }
  createDb(){

   this.employees =  [
           {
          id: 1,
          names: "Ram",
          location: "Bangalore",
          email: "ram@mail.com",
          mobile: "9867512345"
        },
        {
          id: 2,
          names: "Raj",
          location: "Chennai",
          email: "raj@mail.com",
          mobile: "7867534521"
        },
        {
          id: 3,
          names: "Vinay",
          location: "Pune",
          email: "vinay@mail.com",
          mobile: "9975287450"
        }

   ];

   return {employees :this.employees};

  }

}