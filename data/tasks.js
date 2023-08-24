// data/tasks.js
// const tasks = [
//     { id: 1, text: 'Task 1', completed: false },
//     { id: 2, text: 'Task 2', completed: true },
//     // Add more tasks here
// ];

// export function getTasks() {
//     return tasks;
// }

// export function addTask(text) {
//     const newTask = { id: Date.now(), text, completed: false };
//     tasks.push(newTask);
//     return newTask;
// }




let nextTaskId = 1; // Initialize the ID counter

const tasks = [
    { id: getNextTaskId(), text: 'Task 1', completed: false },
    { id: getNextTaskId(), text: 'Task 2', completed: true },
    // Add more tasks here
];

function getNextTaskId() {
    return nextTaskId++; // Return the current ID and increment for the next task
}

export function getTasks() {
    return tasks;
}

export function addTask(text) {
    const newTask = { id: getNextTaskId(), text, completed: false };
    tasks.push(newTask);
    return newTask;
}




