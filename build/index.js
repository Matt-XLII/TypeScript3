"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`My name is ${this.name}`);
    }
    tellMyAge() {
        console.log(`My age is ${this.age}`);
    }
}
let John = new Person("John", 40);
let Mary = new Person("Mary", 35);
John.tellMyName();
Mary.tellMyName();
