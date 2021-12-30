import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { StudentsListComponent } from '../students/students-list/students-list.component';
import { TeachersListComponent } from '../teachers/teachers-list/teachers-list.component';
import { EmployeesListComponent } from '../employees/employees-list/employees-list.component';

const appRoutes:Routes =[
  {path:"Students", component:StudentsListComponent},
  {path:"Teachers", component:TeachersListComponent},
  {path:"Employees", component:EmployeesListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
