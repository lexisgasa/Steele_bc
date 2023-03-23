
let selection = prompt("What do you want to do?")

// es un while loop por lo tanto siempre tendrá algo que preguntar hasta que no se escriba quit

let tasks = [];
while (selection !== "quit") {
    
    //  push de lo que se recoge 

if (selection === "new") {
    let newTask = prompt("What would you like to add?");
    tasks.push(newTask);
    alert("Task added successfully");
}
// console log de lo que ya hay

if (selection === "list") {
    console.log("*******************")
    console.log(tasks)
    console.log("*******************")
}

// quiza estaría bien poner index +1 para referirse a la primera tarea, ya que la primera sera el indice 0

if (selection === "delete") {
    let index = prompt("Which task would you like to delete?")
    tasks.splice(index, 1)
    alert("Task removed successfully")
}

// despues de hacer una acción siempre volverá a preguntar que se hace 

selection = prompt("What do you want to do?")

}

