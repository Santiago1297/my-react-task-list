import { useState } from "react";
import { TaskInput } from "../components/TaskInput";
import { TaskList } from "../components/TaskList";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { Stack } from '@chakra-ui/react'

export const Tasks = () => {
    const {getLocalStorage} = useLocalStorage("task");
    const [task, setTask] = useState(getLocalStorage());
    const [inputText, setInputText] = useState("");

  return (
    <Stack alignItems={"center"}>
        <TaskInput todo="" task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
        <TaskList task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
    </Stack>
  )
}
