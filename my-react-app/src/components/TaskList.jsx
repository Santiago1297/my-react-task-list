import { Task } from "./Task";

export const TaskList = ({task, setTask, inputText, setInputText}) => {

  const handleDeleteAllTasks = () => {
    setTask([]);
  }
  
  return (
    <>
    <ul>
      {task.map((todo) => {
        return(
          <Task key={todo.id} todo={todo} task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
        )
      })}
    </ul>
    {
      <button onClick={handleDeleteAllTasks}>Delete all tasks</button>
    }
    </>
  );
};
