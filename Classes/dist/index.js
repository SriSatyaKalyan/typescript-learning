"use strict";
class Player {
    constructor(first, last) {
        this._score = 0;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    //shortcut in TS instead of initializing separately
    // constructor(
    //     public first: string, 
    //     public last: string,
    //     private score: number
    //     ) {}
    secretMethod() {
        console.log("Long throw");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score cannot be negative");
        this._score = newScore;
    }
    get score() {
        return this._score;
    }
}
const elton = new Player("Elton", "Gross");
// console.log(elton.fullName);
// elton.score = 23;
// console.log(elton.score);
class superPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999; // we do not have access to this outside class if this is private
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log("Them new jackets!");
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("blue", "Zara");
console.log(bike1);
console.log(jacket1);
console.log(elton);
//abstract classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    ;
    //abstract class has functions and data - which is something that is not in an interfact
    greet() {
        console.log("Hello!");
    }
}
