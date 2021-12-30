import { Person } from "src/app/person";
import { Class } from "src/app/class";

export class Student extends Person
{
    constructor(ID:number,Age:number, Name:string, City:string)
    {
        super(ID,Age,Name,City)
    }
}