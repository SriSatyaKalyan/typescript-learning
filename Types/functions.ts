function square(num: number){
    return num * num;
}

square(2)
// square("asd")
// square (true)

function greet(person: string){
    return "Hi, ${person}!";
}

greet("Helena");

const doSomething = (person: string, age: number, isFunny: boolean) => {

};

doSomething("Helena", 25, false);

//Providing a specific value for the input parameter
function greetAgain(person: string = 'stranger'){
    return "Hi, ${person}!";
}

greetAgain();
greetAgain("Tony");

//Function Return Types
const addNums = (x: number, y: number): number => {
    return x + y;
}

addNums(5, 5);

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toUpperCase();
})

//void return type
function printTwice(msg: string){
    console.log(msg);
    console.log(msg);
}

//never return type
function makeError(msg: string): never{
    throw new Error(msg);
}

