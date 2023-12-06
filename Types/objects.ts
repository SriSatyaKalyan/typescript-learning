//A function with object type parameter
function printName(person: {first: string, last: string}){
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins"})
//Thomas Jenkins

let coordinate: {x: number, y: number} = {x: 34, y: 2};

function randomCoordinate(): {x: number; y: number}{
    return {x: Math.random(), y: Math.random()};
}

printName({first: "Mick", last: "Jagger"})

//excess properties
const singer = {first: "Mick", last: "Jagger", age: 47, isAlive: true};
printName(singer)

//type alias
type Point = {x: number, y: number};
// let coordinate: Point ={x: 34, y: 2};

// function randomCoordinate(): Point {
//     return {x: Math.random(), y: Math.random()};
// }

function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2};
}

//nested Objects
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string
    }
}

function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033;
}

function printSongName(song: Song): void{
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12839984,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSongName(mySong);

type PointI = {
    x: number;
    y: number;
    z?: number;
}

//readonly
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 12837,
    username: 'catgurl'
}

console.log(user.id);
// user.id = 23456;

//intersection types
type Circle = { radius: number; }
type Colorful = { color: string }

type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = { radius: 4, color: "yellow" }