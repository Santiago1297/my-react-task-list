import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { useTaskHelper } from "../Hooks/useTaskHelper";
import { useState } from "react";
import { Checkbox, Input, Stack, Text } from '@chakra-ui/react'

export const Task = ({todo, task, setTask, inputText, setInputText}) => {
  const [edit, setEdit] = useState(false)
  const [newDescription, setNewDescription] = useState(todo?.description);
  const {deleteTask, updateTask, completeTask, deleteAllTasks} = useTaskHelper(
    todo,
    task,
    setTask,
    inputText,
    setInputText,
    newDescription
  );
  const handleEdit = () => {
    setEdit(true);
  }
  const handleSaveEdit = () => {
    setTask(updateTask);
    setEdit(false);
  };
  const handleDeleteTask = () => {
    setTask(deleteTask);
  };
  const handleComplete = () => {
    completeTask(todo);
    setTask(completeTask);
  };
  
  return (
    <Stack direction={"row"} alignItems={"center"} width={"400px"} border={"1px solid white"} justifyContent={"space-between"} padding={"0.5rem 1rem"}>
      <Checkbox isChecked={todo?.isComplete} onChange={()=>handleComplete(todo)}/>
      {
        edit ? (
          <Input type="text" name="" id="" backgroundColor={"white"} value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
        ):(
          <Text color={"white"} fontSize={20} style={{textDecoration:todo?.isComplete ? "line-through":"none"}}>{todo?.description}</Text>
        )
      }

      <div>
        {
          edit ? (
            <button onClick={handleSaveEdit} style={{backgroundColor:"white", padding:"0.3rem"}}>Guardar</button>
          ):(
            <Stack>
            <button onClick={handleEdit}>
              <IoCreateOutline className="modify" color="aqua" fontSize={30}/>
            </button>
            <button onClick={handleDeleteTask}>
              <IoTrashOutline className="delete" color="red" fontSize={30}/>
            </button>
          </Stack>
          )
        }
      </div>
    </Stack>
  );
};
