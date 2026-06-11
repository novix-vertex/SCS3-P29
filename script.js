const input = document.querySelector("input");

const addBtn = document.querySelector(".add-btn");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");

const h1 = document.querySelector("h1");

const todoList = document.querySelector("#todo-list");

addBtn.addEventListener("click", () => {
    if (!input.value.trim()) {
        return;
    }
    todoList.innerHTML += `<li class="todo-item">${input.value}
                <div class="btns">
                    <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>
                </div>
            </li>`;
    input.value = "";
});

