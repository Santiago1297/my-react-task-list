import { Task } from "./Task";

export const TaskList = (props) => {
  const { list } = props;

  return (
    <article>
      {list.map((taskName) => (
        <Task name={taskName.name} />
      ))}
    </article>
  );
};
