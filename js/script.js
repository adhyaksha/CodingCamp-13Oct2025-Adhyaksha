// /// Database Simulation
// let tasksDb = [];

// /// Add Functionality
// function addTask() {
//     /// Get Input Values
//     const taskInput = document.getElementById('todo-input');
//     const taskDate = document.getElementById('todo-date');

//     /// Validate Input
//     if (validateInput(taskInput.value, taskDate.value)) {
//         /// Create Task Object
//         const newTask = {
//             task: taskInput.value,
//             date: taskDate.value,
//         }

//         /// Add to database
//         tasksDb.push(newTask);

//         /// Render
//         renderTasks();
//     }
// }

// /// Render Functionality
// function renderTasks() {
//     /// Clear Existing List
//     const taskList = document.getElementById('task-list');
//     taskList.innerHTML = '';

//     /// Render Each Task
//     tasksDb.forEach((taskObj, index) => {
//         taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
//     });
// }

// /// Delete All Functionality
// function deleteAllTasks() {
//     /// Clear Database
//     tasksDb = [];

//     /// Render
//     renderTasks();
// }

// /// Filter Functionality (Placeholder)
// function filterTasks() { }

// /// Input Validation
// function validateInput(task, date) {
//     /// Simple Validation
//     if (task.trim() === '' || date.trim() === '') {
//         alert('Please enter both task and due date.');
//         return false;
//     }
//     return true;
// }


/// Database Simulation
let tasksDb = [];

/// Add Functionality
function addTask() {
  // Get Input Values
  const taskInput = document.getElementById('todo-input');
  const taskDate = document.getElementById('todo-date');

  // Validate Input
  if (validateInput(taskInput.value, taskDate.value)) {
    // Create Task Object
    const newTask = {
      task: taskInput.value,
      date: taskDate.value,
    };

    // Add to database
    tasksDb.push(newTask);

    // Render
    renderTasks();

    // Clear input after adding
    taskInput.value = '';
    taskDate.value = '';
  }
}

/// Render Functionality
function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  if (tasksDb.length === 0) {
    taskList.innerHTML = '<li>gak ada list apapun</li>';
    return;
  }

  // Render each task
  tasksDb.forEach((taskObj, index) => {
    taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
  });
}

/// Delete All Functionality
function deleteAllTasks() {
  tasksDb = [];
  renderTasks();
}

/// Filter Functionality (Placeholder)
/// Filter Functionality
function filterTasks() {
  const keyword = prompt('Masukkan kata kunci untuk filter:');

  if (!keyword) {
    // Kalau kosong, tampilkan semua task lagi
    renderTasks();
    return;
  }

  // Filter task yang mengandung keyword (tidak case-sensitive)
  const filtered = tasksDb.filter(taskObj =>
    taskObj.task.toLowerCase().includes(keyword.toLowerCase())
  );

  // Tampilkan hasil filter
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  if (filtered.length === 0) {
    taskList.innerHTML = `<li>Tidak ada task yang cocok dengan "${keyword}"</li>`;
    return;
  }

  filtered.forEach(taskObj => {
    taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
  });
}


/// Input Validation
function validateInput(task, date) {
  if (task.trim() === '' || date.trim() === '') {
    alert('Masukkan catatan dan tanggal!');
    return false;
  }
  return true;
}
