document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;
    
    // const priority = document.querySelector("#priority").value;
    // priority.sort

    taskList.innerHTML += `<li> ${newTask}
    <button data-action = "delete"> X </button>
    </li>`;

    taskList.addEventListener("click", function (event) {
      if (event.target.dataset.action === "delete") {
        event.target.parentElement.remove();
      }
    });

  taskForm.reset();
  });
});

    // const low = document.getElementById("low").fontcolor("green")
    // const medium = document.getElementById("medium").fontcolor("yellow")
    // const high = document.getElementById("high").fontcolor("red")

// function prioritize() {
  
//   const priority = document.querySelector("#priority").value;
//     if (priority == document.querySelector(#low)) {
//       priority.fontcolor("green");
//     }
//     else if (priority == document.querySelector(#medium)) {
//       priority.fontcolor("yellow") ;
//     }
//     else {
//       priority.fontcolor("red");
//     }
// }
