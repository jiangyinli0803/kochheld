import {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import './App.css';
import type {IRecipe} from "./interfaces/IRecipe.ts";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Recipes from "./pages/Recipes.tsx";


function App() {
  const [recipes, setRecipes] = useState<Array<IRecipe>>();

    useEffect(() => {
        const testRecipes = [];
        for (let i = 0; i < 20; i++) {
            testRecipes.push({
                id: '123',
                name: 'Testgericht',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                image: 'https://www.fitforfun.de/files/images/202102/1/kleine-kueche-wenig-zeit-so-gelingen-die-one-pot-gerichte,468455_1x1_xl.jpg',
                ingredients: [
                    'Tomaten',
                    'Zwiebeln',
                    'Pasta',
                    'Mozarella',
                    'Basilikum'
                ]
            });
        }
        setRecipes(testRecipes as IRecipe[])
    }, []);

  return (
    <>
        <NavBar />
        <Container>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', paddingTop: 10 }}>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/recipes'} element={recipes && <Recipes recipes={recipes} />} />
                    {/*<Route path={'/recipe'} element={<Recipe recipe={recipe} />} />*/}
                </Routes>
            </Box>
        </Container>
    </>
  )
}

export default App
