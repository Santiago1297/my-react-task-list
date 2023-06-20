import "./App.css";
import Header from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { description: "Sacar al perro", isCompleted: false },
    { description: "Lavar los platos", isCompleted: false },
    { description: "Estudiar React", isCompleted: false },
  ]);

  const submitTask = (description) => {
    if (!tasks.find((task) => task.description === description)) {
      setTasks([...tasks, { description: description, isCompleted: false }]);
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <TaskInput submitTask={submitTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
