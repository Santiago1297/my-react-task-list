import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { useTaskHelper } from "../Hooks/useTaskHelper";

export const Task = (props) => {
  const [tasks, submitTask, deleteTask, updateTask] = useTaskHelper();
  const handleUpdateTask = () => {
    updateTask(props.description, newDescription);
  }
  const handleDeleteTask = () => {
    deleteTask(props.description);
  };
  return (
    <div className="Tasks">
      <input type="checkbox" />
      <div className="Tasks">{props.description}</div>
      <div>
        <button onClick={handleUpdateTask}>
          <IoCreateOutline className="modify" />
        </button>
        <button onClick={handleDeleteTask}>
          <IoTrashOutline className="delete" />
        </button>
      </div>
    </div>
  );
};
