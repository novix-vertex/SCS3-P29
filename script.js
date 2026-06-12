
const input = document.querySelector("input");

const addBtn = document.querySelector(".add-btn");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");

const todoList = document.querySelector("#todo-list");

let taskId = null;
let isEditing = false;

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
        return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "todo-item");
    li.setAttribute("data-tid", "tid-" + Math.floor(Math.random() * 10000000000));

    let h2 = document.createElement("h2");
    h2.textContent = input.value;

    let divBtns = document.createElement("div");
    divBtns.setAttribute("class", "btns");

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.textContent = "Delete";

    if (isEditing) {
        console.log("in isediting")
        isEditing = false;
        console.log(taskId);
        let elem = document.querySelector(`[data-tid="${taskId}"] h2`);
        elem.textContent = input.value;

        input.value = "";
        addBtn.textContent = "Add";
        taskId = null;
    } else {
        console.log("in not isediting")
        todoList.append(li);
        li.append(h2, divBtns);
        divBtns.append(editBtn, deleteBtn);
    }


    editBtn.addEventListener("click", () => {
        isEditing = true;
        input.value = h2.textContent;
        addBtn.textContent = "Update";
        taskId = li.dataset.tid;
    });

    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure, you want to delete this task?")) {
            li.remove();
        }
    });

    input.value = "";
});


