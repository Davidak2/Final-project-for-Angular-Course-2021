import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Student } from "./students-list/Student";
import {STUDENTS} from "./students-list/dummy-data-student"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents():Observable<Student []> 
  {
    return of(STUDENTS);
  }
}