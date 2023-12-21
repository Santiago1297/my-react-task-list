import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { useTaskHelper } from "../Hooks/useTaskHelper";
import { useState } from "react";

export const Task = ({todo, task, setTask, inputText, setInputText}) => {
  const [edit, setEdit] = useState(false)
  const [newDescription, setNewDescription] = useState(todo.description);
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
    <div className="Tasks">
      <input type="checkbox" checked={todo.isComplete} onChange={()=>handleComplete(todo)}/>
      {
        edit ? (
          <input type="text" name="" id="" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
        ):(
          <div className="Tasks" style={{textDecoration:todo.isComplete ? "line-through":"none"}}>{todo.description}</div>
        )
      }

      <div>
        {
          edit ? (
            <button onClick={handleSaveEdit}>Guardar</button>
          ):(
            <div>
            <button onClick={handleEdit}>
              <IoCreateOutline className="modify" />
            </button>
            <button onClick={handleDeleteTask}>
              <IoTrashOutline className="delete" />
            </button>
          </div>
          )
        }
      </div>
    </div>
  );
};
