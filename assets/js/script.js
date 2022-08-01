const btn = document.querySelector("[data-form-btn]");


btn.addEventListener("click", (e) => {
  const input = document.querySelector("[data-form-input]");
  const task = document.createElement("li");
  const list = document.querySelector("[data-list]");
  e.preventDefault();
  task.classList.add("container__task");
  let texto = input.value;
  input.value = "";
  const content = `
    <i class="fas fa-check-circle task__check--icon"></i>
    <div class="task__description">
      ${texto}
    </div>
    <i class="fas fa-trash task__trash--icon"></i>
  `;
  task.innerHTML = content;
  list.appendChild(task)
});