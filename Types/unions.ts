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

