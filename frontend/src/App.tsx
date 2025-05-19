
import {Routes, Route} from "react-router-dom";

import './App.css';

import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AiSearch from "./components/AiSearch.tsx";


function App() {

  return (
    <>
        <NavBar />
        <Container>
            <Box sx={{ bgcolor: 'white', width: '100vw',  height: '100vh' }}>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={"/aisearch"} element={<AiSearch/>}/>
                    {/*<Route path={'/recipes'} element={<Recipes recipes={recipes} />} />*/}
                    {/*<Route path={'/recipe'} element={<Recipe recipe={recipe} />} />*/}
                </Routes>
            </Box>
        </Container>
    </>
  )
}

export default App
