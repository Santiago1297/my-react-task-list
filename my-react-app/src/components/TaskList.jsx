import { Stack } from "@chakra-ui/react";
import { Task } from "./Task";

export const TaskList = ({task, setTask, inputText, setInputText}) => {

  const handleDeleteAllTasks = () => {
    setTask([]);
  }
  
  return (
    <>
    <Stack gap={3}>
      {task?.map((todo) => {
        return(
          <Task key={todo.id} todo={todo} task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
        )
      })}
    </Stack>
    {
      <button style={{backgroundColor:"red", padding:"0.5rem", color:"white", textTransform:"uppercase", fontWeight:"600"}} onClick={handleDeleteAllTasks}>Delete all tasks</button>
    }
    </>
  );
};
