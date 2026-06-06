const taskInput = document.getElementById("taskInput");
const taskError = document.getElementById("taskError");

//hàm mở modal
function openModal() {
  document.getElementById("modalOverlay").classList.add("show");
}
//dong model
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("show");
  clearError();
  taskInput.value = "";
}
//hàm add
function submitTask() {
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    showError("Vui lòng không để trống tên Task!");
  } else if (taskName.length > 100) {
    showError("Tên Task quá dài! Không được vượt quá 100 kí tự.");
  } else {
    clearError();
    alert("Thêm Task thành công: " + taskName);
    closeModal();
  }
  // lấy danh sách task
  const taskContainer = document.getElementById("taskContainer");

  // tạo thẻ task mới
  const taskCard = document.createElement("article");

  taskCard.className = "card-task";

  taskCard.innerHTML = `
    <div class="card-body">
      <div class="task-name">
        <small class="text-muted">Task</small>
        <span class="fw-bold">${taskName}</span>
      </div>

      <div class="task-priority">
        <small class="text-muted">Priority</small>
        <span class="fw-bold text-danger">High</span>
      </div>

      <div>
        <span class="badge bg-light text-dark border px-3 py-2 rounded-pill">
          To Do
        </span>
      </div>

      <div>
        <button class="btn icon-btn me-2">&#128221;</button>

        <button
          class="btn icon-btn text-danger"
          onclick="deleteTask(this)"
        >
          &#128465;
        </button>
      </div>
    </div>
  `;

  // thêm vào danh sách
  taskContainer.appendChild(taskCard);

  // reset form
  taskInput.value = "";

  closeModal();

}

function showError(message) {
  taskInput.classList.add("is-invalid"); // Bootstrap: viền đỏ cho input
  taskError.textContent = message;
  taskError.classList.remove("hidden"); // CSS thuần: hiện div lỗi
}

function clearError() {
  taskInput.classList.remove("is-invalid"); // Bootstrap
  taskError.textContent = "";
  taskError.classList.add("hidden"); // CSS thuần
}

taskInput.addEventListener("input", function () {
  clearError();
});
