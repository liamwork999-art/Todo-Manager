/*
Todo Manager

A simple JavaScript practice project for managing tasks.
This starter file contains sample task data and comments for the core features you will build.
*/

const tasks = [
  { title: 'Study JavaScript', completed: false },
  { title: 'Exercise', completed: true },
  { title: 'Clean room', completed: false },
];

// TODO: add a function to add a new task
// TODO: add a function to mark a task as completed
// TODO: add a function to show pending tasks
// TODO: add a function to show completed tasks
// TODO: add a function to count total, completed, and pending tasks

// Example: you can test your functions here later
console.log('Todo Manager starter file');
console.log(tasks);

function addTask(task, taskTitle) {
  // Adding task
  const newTask = {
    title: taskTitle,
    completed: false,
  };
  task.push(newTask);
}

function delTask(task, taskTitle) {
  // Deleting task
  const removeTask = {
    title: taskTitle,
    completed: true || false,
  };

  for (const eachTask of task) {
    if (removeTask.title === eachTask.title) {
      task.pop(removeTask);
    }
  }
}

function delTask(task, taskTitle) {
  // Deleting task
  const removeTask = {
    title: taskTitle,
    completed: true || false,
  };

  for (const eachTask of task) {
    if (removeTask.title === eachTask.title) {
      task.pop(removeTask);
    }
  }
}

// just saving the streak
