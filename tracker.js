//  ------------    Application ----------------
todos = JSON.parse(localStorage.getItem("todos")) || [];
const taskMaker = document.querySelector("#new-card");

taskMaker.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {
    content: e.target.elements.content.value,
    complete: false,
  };

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));

  e.target.reset();

  listing();
});

function listing() {
  const todoList = document.querySelector("#task-tracker");

  todoList.innerHTML = ``;

  //------------------------------------ Card Creation  ------------------------------------
  //For Each Todo It create each element and Adds a class to them for styling and QuerySelector
  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-item");

    const label = document.createElement("label");
    const complete = document.createElement("input");
    complete.classList.add("checkbox");

    const contentGrouping = document.createElement("div");
    const content = document.createElement("div");
    content.classList.add("todo-content");

    const buttons = document.createElement("section");
    buttons.classList.add("buttons");

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.onclick = "Editing";
    const remove = document.createElement("button");
    remove.classList.add("delete");

    complete.type = "checkbox";
    complete.checked = todo.complete;

    content.innerHTML = `<input type="text" value="${todo.content}" required readonly>`;
    edit.textContent = "Edit";

    remove.textContent = "Delete";

    // Appending Elements placing them into parent elements (Like filling a Box)
    label.append(complete, contentGrouping);
    buttons.append(edit, remove);
    todoCard.append(label, content, buttons);
    todoList.append(todoCard);
    //------------------------------------------------------------------------
    // ------------------------- Button Events  -------------------------

    // Complete Event
    complete.addEventListener("click", (e) => {
      todo.complete = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.complete) {
        todoCard.classList.add("complete");
      } else {
        todoCard.classList.remove("complete");
      }

      listing();
    });

    // Edit Event
    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        listing();
      });
    });

    // Delete Event
    remove.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      listing();
    });
  });
}
