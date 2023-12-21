import { Task } from "./Task";

export const TaskList = ({task, setTask, inputText, setInputText}) => {

  return (
    <ul>
      {task.map((todo) => {
        return(
          <Task key={todo.id} todo={todo} task={task} setTask={setTask} inputText={inputText} setInputText={setInputText}/>
        )
      })}
    </ul>
  );
};
