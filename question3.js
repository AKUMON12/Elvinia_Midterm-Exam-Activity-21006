// Task list storage
let tasks = [];
let idCounter = 1;

// Function to add a task
function addTask(name, description) {
    const task = { id: idCounter++, name, description };
    tasks.push(task);
    return task;
}

// Function to view all tasks
function getAllTasks() {
    return tasks;
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        return task;
    }
    return null;
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Example Usage
addTask("Buy groceries", "Milk, Eggs, Bread");
addTask("Study JavaScript", "Complete midterm exam");

// Display tasks
console.log(getAllTasks());
