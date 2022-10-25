//  ------------    Application ----------------
const newTodoForm = document.querySelector("#new-todo-form");

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {
    content: e.target.elements.content.value,
    category: e.target.elements.content.value,
    done: false,
  };

  var data = fs.readFileSync("data.json");
  var item = JSON.parse(data);

  item.push(todo);
  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));

  e.target.reset();

  DisplayTodos();
});

function DisplayTodos() {
  const todoList = document.querySelector("#todo-list");

  todoList.innerHTML = ``;

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;

    input.classList.add("checkbox");
    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.focus();
      input.addEventListener("blur", (e) => {
        todo.content = e.target.vaue;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}
