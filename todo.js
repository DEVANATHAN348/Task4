function filterTasks(status) {
    var tasks = document.getElementsByClassName("task");
    for (var task of tasks) {
        if (status === "all" || (status === "completed" && task.classList.contains("completed")) || (status === "incomplete" && !task.classList.contains("completed"))) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    }
}

function addTask() {
    var taskInput = document.getElementById("task-input").value;
    if (taskInput.trim() === "") {
        alert("Task description cannot be empty!");
        return;
    }
    var taskList = document.getElementById("task-list");
    var newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `<input type="checkbox" onclick="toggleTaskStatus(this)"> ${taskInput} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(newTask);
    document.getElementById("task-input").value = "";
}

function toggleTaskStatus(checkbox) {
    var task = checkbox.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    var task = button.parentElement;
    task.remove();
}

