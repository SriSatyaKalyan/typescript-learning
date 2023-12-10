// console.log("Woohoo yeah!!!");

import { create } from "domain";

// function printDouble(msg: string){
//     console.log(msg);
//     console.log(msg);
// }

// printDouble("HELLO WORLD!");

// const btn = document.getElementById("btn");
// console.log(btn)

// let mystery: unknown = "Hello World!";
// const numChars = (mystery as string).length

//WATCH FROM 73rd LECTURE TO GET THIS WORKING

interface Todo {
    text: string,
    completed: boolean;
}

const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;  

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON === null) return [];
    return (JSON.parse(todosJSON));
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };

    createTodo(newTodo);
    todos.push(newTodo);

    //creating local Storage
    localStorage.setItem("items", JSON.stringify(todos));

    input.value = "";
}

function createTodo(todo: Todo){
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        console.log("CLICKED!");
    });
    
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

form.addEventListener("submit", handleSubmit);

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("SUBMITTED!");
// });

// btn.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });