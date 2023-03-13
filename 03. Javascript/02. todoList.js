
let selection = prompt("What do you want to do?")

let tasks = [];
while (selection !== "quit") {
    

if (selection === "new") {
    let newTask = prompt("What would you like to add?");
    tasks.push(newTask);
    alert("Task added successfully");
}

if (selection === "list") {
    console.log("*******************")
    console.log(tasks)
    console.log("*******************")
}

if (selection === "delete") {
    let index = prompt("Which task would you like to delete?")
    tasks.splice(index, 1)
    alert("Task removed successfully")
}

selection = prompt("What do you want to do?")

}

