import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { EmployeesModule } from './employees/employees.module';
@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    TeachersListComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    TeachersModule,
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
