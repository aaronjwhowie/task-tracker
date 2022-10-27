Issues

1. Struggled with pushing information to local json file

2. I was struggling to get the to do list to stay on the screen after refresh

3. Struggled to get my edit button to work

4. Struggled to get my localhost to work but when launching the server live locally without node it would work.

5. Conflict of local storage and Localhost server launch

6. One struggled I ran into was making it the edit button,
   throughout the process I learned about the focus and blur methods.

7. Struggled with Edit button

edit.innerHTML = "<button onclick=";
    Editing();
    ("> Edit </button>");
function Editing() {
const input = content.querySelector("input");
input.removeAttribute("readonly");
input.focus();
input.addEventListener("blur", (e) => {
input.setAttribute("readonly", true);
todo.content = e.target.previousElementSibling;
localStorage.setItem("tasks", JSON.stringify(tasks));
listing();
});
}

8. Getting The Save Button to not Repeat and Getting the Input field to stay when saved

9. The Task List wouldnt stop reloading a previously deleted task unless replaced
