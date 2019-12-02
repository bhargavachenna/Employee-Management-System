import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from "./app-routing/app-routing.module";
import { FilterPipe} from './filter.pipe'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataService } from './data.service';
import { EmployeeService } from './employee.service';
import { SharedService } from './shared.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, 
  InMemoryWebApiModule.forRoot(DataService) ],
  declarations: [ AppComponent, HelloComponent, routingComponents, FilterPipe],
  bootstrap:    [ AppComponent ],
  providers: [DataService, EmployeeService, SharedService]
})
export class AppModule { }
