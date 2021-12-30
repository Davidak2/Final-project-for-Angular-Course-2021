import { Injectable } from '@angular/core';
import { Employee } from './employees-list/employee';
import { EMPLOYEES } from './employees-list/dummy-data-employee';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees():Observable<Employee []>
  {
    return of(EMPLOYEES)
  }
}
