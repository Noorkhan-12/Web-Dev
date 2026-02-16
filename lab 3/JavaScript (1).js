         const inputField = document.getElementById("inputed_tasks");
const addBtn = document.getElementById("Add_btn");
const taskContainer = document.getElementById("adding_asks");

// Function to add a new task 
function addTask(){
    const taskText = inputField.value.trim();
    if(taskText === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.id = "add_one";

    const taskLeft = document.createElement("div");
    taskLeft.id = "task_left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const p = document.createElement("p");
    p.textContent = taskText; // show text


    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            p.style.textDecoration = "line-through";
            p.style.color = "gray";
        } else {
            p.style.textDecoration = "none";
            p.style.color = "black";
        }
    });

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(p);

    const taskRight = document.createElement("div");
    taskRight.id = "task_right";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => taskDiv.remove());

    taskRight.appendChild(delBtn);

    taskDiv.appendChild(taskLeft);
    taskDiv.appendChild(taskRight);

    taskContainer.appendChild(taskDiv);

    inputField.value = "";
}


addBtn.addEventListener("click", addTask);


inputField.addEventListener("keypress", function(e){
    if(e.key === "Enter") addTask();
});


document.querySelectorAll("#adding_asks button").forEach(btn => {
    btn.addEventListener("click", function(){
        btn.parentElement.parentElement.remove();
    });
});


document.querySelectorAll("#adding_asks input[type='checkbox']").forEach(cb => {
    const p = cb.nextElementSibling; 
    cb.addEventListener("change", function() {
        if (cb.checked) {
            p.style.textDecoration = "line-through";
            p.style.color = "gray";
        } else {
            p.style.textDecoration = "none";
            p.style.color = "black";
        }
    });
});
