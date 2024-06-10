let allTodos = [];

function submitTodo() {
  let myTodo = document.getElementById("todo").value;
  let showErr = document.getElementById("showerr");
  let disp = document.getElementById("disp");

  if (myTodo !== "") {
    allTodos.push(myTodo);
    todo.value = "";
    showErr.innerHTML = "";
    runShit();
  } else {
    setTimeout(() => {
      showErr.innerHTML = `<p style = "background: lightsalmon; padding: 5px; border-radius: 5px; color: rgb(38, 0, 255)">Empty stuff</p>`;
    }, 1000);
  }
}

function runShit() {
  disp.innerHTML = "";
  for (i = 0; i < allTodos.length; i++) {
    let elem = allTodos[i];
    disp.innerHTML += `<h3 style = "text-transform: capitalize;">${
      i + 1
    }. &nbsp;${elem}</h3>`;
    // &nbsp; means space in any browser
  }
}

function unshiftShit() {
  let myTodo = document.getElementById("todo").value;
  let showErr = document.getElementById("showerr");
  let disp = document.getElementById("disp");

  if (myTodo !== "") {
    allTodos.unshift(myTodo);
    todo.value = "";
    showErr.innerHTML = "";
    runShit();
  } else {
    showErr.innerHTML = `<p style = "background: lightsalmon; padding: 5px; border-radius: 5px; color: rgb(38, 0, 255)">Empty stuff</p>`;
  }
}

function popShit() {
  allTodos.pop();
  runShit();
}

function shiftShit() {
  allTodos.shift();
  runShit();
}

function delAll() {
  // allTodos = [];
  let check = confirm("Are You Sure you want this... You might just regret it");
  if (check == true) {
    if (allTodos.length > 0) {
      allTodos.splice(0, allTodos.length);
      // Splice takes 2 to 3 parameters (Where to start, How many to delete, (Maybe; What to replace with)). It can edit, and delete.
    } else if (check == true && allTodos.length == 0) {
      alert("There is  nothing to delete");
    } else {
      console.log(allTodos);
    }
    runShit();
  }
}

function delAny() {
  let j = Number(prompt("Enter a number to delete"));
  allTodos.splice(j - 1, 1);
  runShit();
}

function editAny() {
  let j = Number(prompt("Enter a number to edit"));
  let userEdit = prompt("Enter the new input");
  allTodos[j - 1] = userEdit;
  runShit();
}
