// Get DOM elements
let input = document.getElementById("taskInput");
let button = document.getElementById("taskButton");
let list = document.getElementById("taskList");

// Event listener for button click to add task
button.addEventListener('click', addTask);

// Event listener for "Enter" key press to add task
input.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    if (input.value.trim() === "") return; // Prevent adding empty tasks

    let newTask = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = input.value;

    newTask.appendChild(checkbox);
    newTask.appendChild(span);
    list.appendChild(newTask);

    input.value = ""; // Clear input box
}

// Highlight task on mouseover
list.addEventListener("mouseover", e => {
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = "#f0f0f0";
    }
});

// Remove highlight on mouseout
list.addEventListener("mouseout", e => {
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = "";
    }
});
