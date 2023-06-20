import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

export const Task = (props) => {
  return (
    <div className="Tasks">
      <input type="checkbox" />
      <div>{props.description}</div>
      <button>
        <IoCreateOutline className="modificar" />
      </button>
      <button>
        <IoTrashOutline className="borrar" />
      </button>
    </div>
  );
};
