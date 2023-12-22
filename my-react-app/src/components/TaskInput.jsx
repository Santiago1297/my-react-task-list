import { useTaskHelper } from "../Hooks/useTaskHelper";
import { Input, Button, Stack } from '@chakra-ui/react'

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
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
    <Input background={"white"}
            className="newTaskWrite"
            placeholder="Type new task"
            type="text"
            value={inputText}
            onChange={handleChanged}
            required
            minLength={3}
            maxLength={15}
          />
          <button className="newTask" style={{backgroundColor: "white", padding: "0.5rem"}}>+</button>
    </Stack>
    </form>
  );
};
