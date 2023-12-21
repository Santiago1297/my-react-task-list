import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { useTaskHelper } from "./Hooks/useTaskHelper";

function App() {
  const {getLocalStorage} = useLocalStorage("task");
  const [task, setTask] = useState(getLocalStorage());
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <Header/>
      <TaskInput todo="" task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
      <TaskList task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
    </div>
  );
}

export default App;