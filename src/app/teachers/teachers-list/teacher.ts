import { Person } from "src/app/person"

export class Teacher extends Person
{
    salary:number
    workhourInMonth:number
    yearsOfExp:number
    

    constructor(ID:number,Age:number, Name:string, City:string,Salary:number, WorkhourInMonth:number, YearsOfExp:number)
    {
        super(ID,Age,Name,City)
        this.salary = Salary
        this.workhourInMonth = WorkhourInMonth
        this.yearsOfExp = YearsOfExp
    }
}