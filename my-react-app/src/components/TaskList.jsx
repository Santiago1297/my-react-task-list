import { Task } from "./Task";

export const TaskList = (props) => {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map((task) => (
        <div>
          <Task key={task.description} description={task.description} />
        </div>
      ))}
    </ul>
  );
};
