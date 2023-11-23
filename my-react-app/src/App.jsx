import "./App.css";
import Header from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useTaskHelper } from "./Hooks/useTaskHelper";

function App() {
  const [tasks, submitTask, deleteTask] = useTaskHelper();
  const handleSubmitTask = (description) => {
    submitTask(description);
  };

  return (
    <div className="App">
      <Header />
      <TaskInput submitTask={handleSubmitTask} />
      <TaskList/>
    </div>
  );
}

export default App;
