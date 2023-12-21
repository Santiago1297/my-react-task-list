import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SobreNosotros } from "./pages/SobreNosotros";
import { Tasks } from "./pages/Tasks";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
        <Route path="/Tareas" element={<Tasks/>}/>
      </Routes>
    </div>
  );
}

export default App;