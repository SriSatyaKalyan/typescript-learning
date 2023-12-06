let movieTitle: string = "AMadeus";
movieTitle = "Arrival";
console.log(movieTitle.toUpperCase());

let myNumber: number = 42;
myNumber = 56;

let myBoolean: boolean = true;
myBoolean = false;

//Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two"
// tvShow = false;
// Type 'boolean' is not assignable to type 'string'

//Any type
let thing: any = "hello"
thing = 1;
thing = false;
thing()
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;
for(let movie of movies){
    if(movie == "Amadeus") foundMovie = movie;
}