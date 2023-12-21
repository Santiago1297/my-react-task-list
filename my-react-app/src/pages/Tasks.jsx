import { useState } from "react";
import { TaskInput } from "../components/TaskInput";
import { TaskList } from "../components/TaskList";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const Tasks = () => {
    const {getLocalStorage} = useLocalStorage("task");
    const [task, setTask] = useState(getLocalStorage());
    const [inputText, setInputText] = useState("");

  return (
    <div>
        <TaskInput todo="" task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
        <TaskList task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
    </div>
  )
}
