document.getElementById("addTaskBtn").addEventListener("click", addTodo);

function addTodo() {
    var input = document.getElementById("todoInput").value;
    if (input !== "") {
        var li = document.createElement("li");
        li.innerHTML = input + " <button class='edit-btn'>Edit</button> <button class='delete-btn'>Delete</button>";
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todoInput").value = "";
        li.querySelector(".delete-btn").addEventListener("click", removeTask);
        li.querySelector(".edit-btn").addEventListener("click", editTask);
    }
}

function removeTask() {
    this.parentElement.remove();
}

function editTask() {
    var newText = prompt("Edit task:", this.parentElement.firstChild.textContent.trim());
    if (newText !== null) {
        this.parentElement.firstChild.textContent = newText;
    }
}
