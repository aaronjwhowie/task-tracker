//  ------------    Application ----------------

//Creating an Array to store in the local storage
tasks = JSON.parse(localStorage.getItem("tasks")) || [];
removed = JSON.parse(localStorage.getItem("removed")) || [];

const taskMaker = document.querySelector("#new-card");

taskMaker.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevents instant refresh whenever performing event

  //Adds Information to the Objects Array
  const task = {
    content: e.target.elements.content.value,
    complete: false,
  };

  // Pushing Local Storage information for Each Task Card
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  e.target.reset(); //Clears Input Field

  listing(); //Displays Task Tracker
});

function listing() {
  const taskList = document.querySelector("#task-tracker");

  taskList.innerHTML = ``;

  //------------------------------------ Card Creation  ------------------------------------
  //For Each task It create each element and Adds a class to them for styling and QuerySelector
  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");

    const label = document.createElement("label");

    const complete = document.createElement("input");
    complete.classList.add("checkbox");
    complete.type = "checkbox";
    //If complete is checked
    complete.checked = task.complete;

    const contentGrouping = document.createElement("div");

    const content = document.createElement("div");
    content.classList.add("task-content");

    const buttons = document.createElement("section");
    buttons.classList.add("buttons");

    const remove = document.createElement("button");
    remove.classList.add("remove");

    content.innerHTML = `<input type="text" value="${task.content}" required readonly>`;

    remove.textContent = "Remove";

    // Appending Elements placing them into parent elements (Like filling a Box)
    label.append(complete, contentGrouping);
    buttons.append(remove);
    taskCard.append(label, content, buttons);
    taskList.append(taskCard);

    //Intended to Prevent Empty Input Field Acceptance
    function validation() {
      if (document.forms.content.value == "") {
        alert("Please provide a task");
      }
      return;
    }
    validation;
    //------------------------------------------------------------------------
    //
    //
    //
    //------------------------------- Button Events  -------------------------
    //
    //
    //
    //------------------------------ Complete Event ------------------------------

    //Sets Tasks Comeplete true when targeting checked
    function completion() {
      task.complete = e.target.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));

      if (task.complete) {
        taskCard.classList.add("complete");
      } else {
        taskCard.classList.remove("complete");
      }

      listing();
    }

    complete.addEventListener("click", completion);
    //------------------------------ Edit Event ------------------------------
    const saved = content.querySelector(".nul");
    const input = content.querySelector("input");
    input.addEventListener("dblclick", (e) => {
      input.removeAttribute("readonly");
      input.focus();
      const save = document.createElement("button");
      save.classList.add("save");
      buttons.append(save);
      save.textContent = "Save Edit";
      save.addEventListener("click", (e) => {
        input.addEventListener("blur", (e) => {
          input.setAttribute("readonly", true);
          todo.content = e.target.value;
          localStorage.setItem("todos", JSON.stringify(todos));
          listing();
        });
        // task.content = e.target.elements.content.value;
        // save.classList.add("nul");
        // if (save.classList.contains(".nul")) {
        //   saved.append(save);
        // }
        // listing();
      });
    });

    //------------------------------ remove Event ------------------------------
    remove.addEventListener("click", (e) => {
      tasks = tasks.filter((t) => t != task);
      //   localStorage.removeItem(task);
      localStorage.setItem("removed", JSON.stringify(removed));

      listing();
      //   return;
    });
    // remove.addEventListener("click", removing);
  });
}
