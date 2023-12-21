import { useTaskHelper } from "../Hooks/useTaskHelper";

export const TaskInput = ({todo, task, setTask, inputText, setInputText}) => {
  const {submitTask} = useTaskHelper(todo, task, setTask, inputText, setInputText);

  const handleChanged = (e) => {
    e.preventDefault();
    setInputText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask(submitTask);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="newTaskWrite"
        placeholder="Type new task"
        type="text"
        value={inputText}
        onChange={handleChanged}
        required
        minLength={3}
        maxLength={15}
      />
      <button className="newTask">+</button>
    </form>
  );
};
