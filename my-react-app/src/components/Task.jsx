import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";


export const Task = (props) => {
  const { name } = props;

  return (
      <article className="Tasks">
        <input type="checkbox"/><h3>{name}</h3>
        <button><IoCreateOutline className='modificar'/></button>
        <button><IoTrashOutline className='borrar'/></button>
      </article>
  );
};