let age: number | string = "21";

type Points = { x: number, y: number }
type Loc = { lat: number, long: number}

let coordinates: Points | Loc = {x: 1, y: 34};
coordinates = {lat: 321.213, long: 23.345};

function printAge(age: number | string): void{
    console.log(`You are ${age} years old`);
}

printAge(23);
printAge("12");

// const stuff: (number | string)[] = ["asd", "dfg", "hvd", 1, 76]

//literal types
const zero: 0 = 0;
let hi: "hi";
let mood: "happy" | "sad" = "happy";

//combining literals with unions
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `the answer is ${answer}.`;
}

giveAnswer("no") //The answer is no.
// giveAnswer("I'm not sure") //results in an error
