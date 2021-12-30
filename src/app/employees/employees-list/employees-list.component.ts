import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[] = [];

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees():void{
    this.service.getEmployees().subscribe((employees) => this.employees = employees)
  }
}
