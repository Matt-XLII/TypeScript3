class Person {
    name:  string;
    age: number;

    constructor(name:  string, age:  number) {
        this.name  =  name;
        this.age  =  age;
    }

    tellMyName() : void {
        console.log(`My name is ${this.name}`)
    }
    tellMyAge() : void {
        console.log(`My age is ${this.age}`)
    }
}

let John = new Person("John", 40);
let Mary = new Person("Mary", 35);

John.tellMyName()
Mary.tellMyName()