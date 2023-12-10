"use strict";
// console.log("Woohoo yeah!!!");
// function printDouble(msg: string){
//     console.log(msg);
//     console.log(msg);
// }
// printDouble("HELLO WORLD!");
// const btn = document.getElementById("btn");
// console.log(btn)
// let mystery: unknown = "Hello World!";
// const numChars = (mystery as string).length
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
btn.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
