import { Person } from "src/app/person";

export class Employee extends Person
{
    jobName:string
    salary:number
    workhourInMonth:number

    constructor(ID:number,Age:number, Name:string, City:string,Salary:number, WorkhourInMonth:number, JobName:string)
    {
        super(ID,Age,Name,City)
        this.jobName = JobName
        this.salary = Salary
        this.workhourInMonth = WorkhourInMonth
    }
}