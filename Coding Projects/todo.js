function addTask() {  
    // Step 1: Get the task typed by the user  
    const taskInput = document.getElementById("taskInput");  
    const taskText = taskInput.value.trim();  
  
    // Step 2: Only add the task if it's not empty  
    if (taskText === "") return;  
  
    // Step 3: Create a new list item  
    const taskList = document.getElementById("taskList");  
    const newTask = document.createElement("li");  
    newTask.textContent = taskText;  
  
    // Step 4: Add the task to the list  
    taskList.appendChild(newTask);  
  
    // Step 5: Clear the input box  
    taskInput.value = "";  
  }  