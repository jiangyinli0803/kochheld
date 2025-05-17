
import './App.css'
import NavBar from "./components/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import AiSearch from "./components/AiSearch.tsx";

function App() {


  return (
    <>
      <NavBar/>

        <Routes>
            <Route path={"/"} element={<h1>HomePage</h1>} />
            <Route path={"/aisearch"} element={<AiSearch/>} />
        </Routes>
    </>
  )
}

export default App
