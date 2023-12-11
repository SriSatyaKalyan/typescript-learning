// console.log("Woohoo yeah!!!");
const todos = readTodos();
todos.forEach(createTodo);
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return (JSON.parse(todosJSON));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    //creating local Storage
    localStorage.setItem("items", JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// export {};
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("SUBMITTED!");
// });
// btn.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });
