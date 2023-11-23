import { Task } from "./Task";
import { useTaskHelper } from "../Hooks/useTaskHelper";

export const TaskList = (props) => {
  const [tasks, submitTask, deleteTask] = useTaskHelper();

  return (
    <ul>
      {tasks.map((task) => (
        <div key={task.description}>
          <Task description={task.description} />
        </div>
      ))}
    </ul>
  );
};
