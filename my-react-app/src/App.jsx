import './App.css'
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

const Tasks = [
  { name: "Sacar al perro" },
  { name: "Lavar los platos" },
  { name: "Estudiar React" },
];

// const childrenTasks = [{ name: "Minions" }, { name: "Alice in Wonderland" }];

function App() {
  return (
    <div className="App">
      <Header />
      <form className="forma">
        <label className="ingresar">
          Ingresa nueva tarea: 
          <input type="text" name="name" />
        </label>
        <input className="agregarTarea" type="submit" value="+" />
      </form>
      <TaskList list={Tasks} />
      {/* <TaskList list={childrenTasks} /> */}
    </div>
  );
}

export default App;
