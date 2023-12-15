class Player {
    public readonly first: string;
    public readonly last: string;
    protected _score: number = 0;

    constructor(first: string, last: string) {
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

    private secretMethod(): void {
        console.log("Long throw")
    }
    
    get fullName(): string{
        return `${this.first} ${this.last}`;
    }

    set score(newScore: number){
        if(newScore < 0) throw new Error("Score cannot be negative");
        this._score = newScore;

    }
    get score(): number {
        return this._score;
    }
}

const elton = new Player("Elton", "Gross");
// console.log(elton.fullName);
// elton.score = 23;
// console.log(elton.score);

class superPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore(){
        this._score = 999; // we do not have access to this outside class if this is private
    }
}

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public color: string, public brand: string) {}
    print(): void {
        console.log("Them new jackets!");
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("blue", "Zara");

console.log(bike1);
console.log(jacket1);

interface Printable {
    print(): void;
}

console.log(elton);

//abstract classes
abstract class Employee {
    constructor(public first: string, public last: string){};
    abstract getPay(): number;

    //abstract class has functions and data - which is something that is not in an interfact
    greet(){
        console.log("Hello!");
    }
}



