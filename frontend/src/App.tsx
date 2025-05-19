import {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import './App.css';

import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Recipes from "./pages/Recipes.tsx";
import AiSearch from "./components/AiSearch.tsx";
import type {IRecipe} from "./interfaces/IRecipe.ts";
import Recipe from "./pages/recipe/Recipe.tsx";
import Footer from "./components/footer/Footer.tsx";


function App() {

    const [recipes, setRecipes] = useState <IRecipe[]>()

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

    const recipe: IRecipe =
        {
            name: "Pizza Margherita",
            image: "https://images.unsplash.com/photo-1632428442713-1f13a6c56ec4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Klassische italienische Pizza mit Tomaten und Mozzarella.",
            ingredients: ["Teig", "Tomatensauce", "Mozzarella", "Basilikum", "Olivenöl"],
            instruction: "Zuerst den Pizzateig vorbereiten: Mehl, Wasser, Hefe, Salz und etwas Olivenöl zu einem glatten Teig verkneten und" +
                " etwa eine Stunde gehen lassen. Den Backofen auf 250 °C Ober-/Unterhitze vorheizen, am besten mit einem Pizzastein. " +
                "Passierte Tomaten mit Salz, Pfeffer, einer Prise Zucker und etwas Olivenöl verrühren, um die Tomatensauce zuzubereiten." +
                " Den gegangenen Teig dünn ausrollen und mit der Sauce bestreichen. Mozzarella in Stücke zupfen und auf der Pizza verteilen." +
                " Nach Belieben einige frische Basilikumblätter hinzufügen. Die Pizza 7–10 Minuten backen, bis der Rand knusprig und der Käse geschmolzen ist." +
                " Vor dem Servieren mit etwas Olivenöl beträufeln und sofort genießen."
        };

  return (

    <>

        <NavBar />
        <Container>
            <Box sx={{ bgcolor: 'white', width: '100vw',  height: '100vh' }}>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/recipes'} element={recipes && <Recipes recipes={recipes} />} />
                    <Route path={"/aisearch"} element={<AiSearch/>}/>
                    <Route path={'/recipe'} element={<Recipe recipe={recipe} />} />
                </Routes>
            </Box>
        </Container>
        <Footer/>
    </>
  )
}

export default App
