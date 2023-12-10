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

const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;

btn.addEventListener("click", function() {
    alert(input.value);
    input.value = "";
});