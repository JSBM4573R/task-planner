const btn = document.querySelector("[data-form-btn]");


btn.addEventListener("click", (e) => {
  const input = document.querySelector("[data-form-input]");
  const task = document.createElement("li");
  const list = document.querySelector("[data-list]");
  e.preventDefault();
  var texto = input.value;
  if (texto.length == 0) {
    alert("Profavor ingresa una descripcion para la tarea en la caja de texto.")
  } else {
    input.value = "";
    task.classList.add("container__task");
    const content = `
      <i class="fas fa-check-circle task__check--icon"></i>
      <div class="task__description">
        ${texto}
      </div>
      <i class="fas fa-trash task__trash--icon"></i>
    `;
    task.innerHTML = content;
    list.appendChild(task)
    
  }
  
});

const check = document.querySelectorAll(".task__check--icon");
check.forEach(e => e.addEventListener("click", () => {
  e.classList.toggle("checkTask");
  // e.classList.toggle("checkTask");
}));
