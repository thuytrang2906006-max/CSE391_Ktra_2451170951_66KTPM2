const taskInput = document.getElementById("taskInput");
const taskError = document.getElementById("taskError");

function openModal() {
  document.getElementById("modalOverlay").classList.add("show");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("show");
  clearError();
  taskInput.value = "";
}

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
