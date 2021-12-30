import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teachers:Teacher[] = []

  constructor(private service:TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers():void{
    this.service.getTeachers().subscribe((teachers) => this.teachers = teachers)
  }

}
