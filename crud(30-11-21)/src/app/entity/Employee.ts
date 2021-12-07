export class Employee {
    id:string;
    firstName:string;
    lastName:string;
    age:number;
    designation:string;
    constructor(id:string,
        firstName:string,
        lastName:string,
        age:number,
        designation:string) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.designation = designation;
    }
}