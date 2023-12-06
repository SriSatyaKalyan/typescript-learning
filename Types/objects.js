//A function with object type parameter
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
//Thomas Jenkins
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: "Mick", last: "Jagger" });
//excess properties
var singer = { first: "Mick", last: "Jagger", age: 47, isAlive: true };
printName(singer);
// let coordinate: Point ={x: 34, y: 2};
// function randomCoordinate(): Point {
//     return {x: Math.random(), y: Math.random()};
// }
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSongName(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12839984,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSongName(mySong);
