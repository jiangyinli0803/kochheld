import { useState } from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import type {IRecipe} from "./interfaces/IRecipe.ts";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


function App() {
  const [recipes, setRecipes] = useState<Array<IRecipe>>();

  return (
    <>
        <NavBar />
        <Container>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', paddingTop: 10 }}>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    {/*<Route path={'/recipes'} element={<Recipes recipes={recipes} />} />*/}
                    {/*<Route path={'/recipe'} element={<Recipe recipe={recipe} />} />*/}
                </Routes>
            </Box>
        </Container>
    </>
  )
}

export default App
