import { useState, useEffect } from "react";

export function useTaskHelper() {
  const [tasks, setTasks] = useState([
    { description: "Task 1", isCompleted: false },
    { description: "Task 2", isCompleted: false },
    { description: "Task 3", isCompleted: false },
  ]);

  const submitTask = (description) => {
    if (!tasks.find((task) => task.description === description)) {
      setTasks([...tasks, { description: description, isCompleted: false }]);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (description) => {
    let index = -1;
    for (let i = 0; i < tasks.length && index == -1; i++){
      if(tasks[i].description === description){
        index = i;
      }
    }
    if (index!=-1){
      setTasks(...tasks.splice(index,1))
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

const updateTask = (description, newDescription) => {
  let index = -1;
  for (let i = 0; i < tasks.length && index == -1; i++){
    if(tasks[i].description === description){
      index = i;
    }
  }
  if (index!=-1){
    // let updatedTasks = ...tasks
    // let e = tasks[index];
    tasks[index].description = newDescription;
    setTasks(...tasks)
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData)) {
        setTasks(parsedData);
      } else if (typeof parsedData === "object") {
        const taskList = Object.values(parsedData);
        setTasks(taskList);
      }
    }
  }, []);
  

  return [tasks, submitTask, deleteTask, updateTask];
}