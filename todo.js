let todos = ["Buy groceries"];

var input = prompt("What would you like to do?");

while (input != "quit") {
    if (input === "list") {
        list_todos();
    }
    else if (input === "new") {
        add_todos();
    }
    else if (input === "delete") {
        del_todos();
    }
    input = prompt("What would you like to  do?");
}
console.log("Ok , You quit the app");

function list_todos() {
    console.log("**********")
    todos.forEach(function (todo, i) {
        console.log(i + ":" + todo);
    });
    console.log("**********");
}
function add_todos() {
    let newTodo = prompt("Enter a new todo ")
    todos.push(newTodo);
    console.log("Added");
}
function del_todos() {
    let index = prompt("Enter the index to delete")
    todos.splice(index, 1);
    console.log("Deleted");
}