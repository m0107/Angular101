import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditEmployeeComponent } from './editemplyee/editemplyee.component';

const routes: Routes = [
  { path:"Employees", component:EmployeeListComponent },
  { path:"AddEmployee", component:AddemployeeComponent },
  { path:"EditEmployee/:id", component:EditEmployeeComponent },
  { path:"**", redirectTo:'Employees' },
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
