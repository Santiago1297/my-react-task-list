import { useState, useEffect } from "react";

export const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitTask(inputText);
    setInputText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Type new task"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="newTask">+</button>
    </form>
  );
};
