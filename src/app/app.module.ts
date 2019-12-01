import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataService } from './data.service';
import { PolicyService } from './policy.service';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
  InMemoryWebApiModule.forRoot(DataService) ],
  declarations: [ AppComponent, HelloComponent, PoliciesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, PolicyService]
})
export class AppModule { }
