import { Component, OnInit } from "@angular/core";
import { Student } from "./Student";
import { StudentService } from "../student.service";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students:Student[] = [];

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents():void{
    this.service.getStudents().subscribe((students) => this.students = students)
  }

}
