const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const emptyState = document.getElementById("emptyState");

function updateEmptyState() {
  if (list.children.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

function createTodoItem(text) {
  // <li class="todo-item">
  const li = document.createElement("li");
  li.className = "todo-item";

  // left: checkbox + text
  const left = document.createElement("div");
  left.className = "todo-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  left.appendChild(checkbox);
  left.appendChild(span);

  // delete button
  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "btn-delete";
  delBtn.textContent = "🗑";

  // events
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("done");
    } else {
      li.classList.remove("done");
    }
  });

  delBtn.addEventListener("click", function () {
    list.removeChild(li);
    updateEmptyState();
  });

  li.appendChild(left);
  li.appendChild(delBtn);

  return li;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") {
    input.focus();
    return;
  }

  const item = createTodoItem(text);
  list.appendChild(item);

  input.value = "";
  input.focus();
  updateEmptyState();
});