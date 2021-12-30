import { Injectable } from '@angular/core';
import { Teacher } from './teachers-list/teacher';
import { TEACHERS } from './teachers-list/dummy-data-teacher';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers():Observable<Teacher []>
  {
    return of(TEACHERS)
  }
}
