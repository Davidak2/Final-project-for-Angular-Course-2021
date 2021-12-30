export class Class
{
    classId:number
    className:string
    headTeacher:string
    numOfStudents:number
    placeInSchool:string

    constructor (ClassID:number, ClassName:string,HeadTeacher:string,NumOfStudent:number,PlaceInSchool:string)
    {
        this.classId = ClassID
        this.className = ClassName
        this.headTeacher = HeadTeacher
        this.numOfStudents = NumOfStudent
        this.placeInSchool = PlaceInSchool
    }
}