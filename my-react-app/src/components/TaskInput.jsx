import { useState, useEffect } from "react";

export const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitTask(inputText);
    setInputText("");
  };

  return (
    <form className="forma" onSubmit={handleSubmit}>
      <input
        placeholder="Ingresa nueva tarea"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="agregarTarea">+</button>
    </form>
  );
};
