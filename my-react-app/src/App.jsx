import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SobreNosotros } from "./pages/SobreNosotros";
import { Tasks } from "./pages/Tasks";
import Layout from "./components/Layout";
import { Stack } from '@chakra-ui/react'

function App() {

  return (
  <Layout>
  <Stack className="App" gap={3}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
          <Route path="/Tareas" element={<Tasks/>}/>
        </Routes>
      </Stack>
  </Layout>
  );
}

export default App;