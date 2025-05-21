import {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import axios from "axios";

import './App.css';
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/home/Home.tsx";
import Recipes from "./pages/Recipes.tsx";
import AiSearch from "./components/AiSearch.tsx";
import Recipe from "./pages/recipe/Recipe.tsx";
import Footer from "./components/footer/Footer.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";


function App() {
    const [user, setUser] = useState<string | undefined | null>();

    function login(){
     const host:string = window.location.host === "localhost:5173" ?
       "http://localhost:8080"
       :
      "https://kochheld.onrender.com"
    window.open(host + "/oauth2/authorization/github", "_self")
    }

    function logout(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080"
            :
            "https://kochheld.onrender.com"
        window.open(host + "/logout", "_self")
    }

    const loadUser = ()=>{
            axios.get("/api/auth/me")
              .then(response => setUser(response.data))
                .catch(() => setUser(null))
    }

    useEffect(() => {
        loadUser()
    }, []);


    const recipe: IRecipe =
        {
            name: "Pizza Margherita",
            image: "https://images.unsplash.com/photo-1632428442713-1f13a6c56ec4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Die klassische italienische Pizza Margherita besteht aus einem dünn ausgerollten, luftigen Hefeteig, der bei hoher Temperatur im Ofen knusprig " +
                "gebacken wird. Darauf kommt eine einfache Sauce aus frischen Tomaten, etwas Olivenöl und Basilikum. Mit cremigem Mozzarella aus Büffelmilch belegt, schmilzt" +
                " der Käse beim Backen zu einer zarten, milden Schicht. Frisch aus dem Ofen wird die Pizza oft mit Basilikum und einem Schuss Olivenöl serviert – einfach, aber" +
                " perfekt im Geschmack und ein echter italienischer Klassiker.",
            ingredients: ["Teig", "Tomatensauce", "Mozzarella", "Basilikum", "Olivenöl","Mozzarella", "Basilikum", "Olivenöl"],
            instruction: "Zuerst den Pizzateig zubereiten: Mehl, lauwarmes Wasser, frische Hefe, Salz und ein wenig Olivenöl zu einem glatten, elastischen Teig verkneten. Diesen " +
                "Teig dann abgedeckt an einem warmen Ort etwa eine Stunde gehen lassen, bis er sein Volumen deutlich vergrößert hat. Währenddessen den Backofen auf 250 °C Ober-/" +
                "Unterhitze vorheizen, idealerweise mit einem Pizzastein, damit die Pizza schön knusprig wird. Für die Tomatensauce passierte Tomaten mit Salz, Pfeffer, einer Prise Zucker " +
                "und etwas Olivenöl gut verrühren. Diese Sauce sorgt für den frischen, aromatischen Geschmack und bildet die Basis auf dem Pizzateig. Den gegangenen Teig auf einer leicht bemehlten " +
                "Fläche dünn ausrollen und auf ein Backblech oder den heißen Pizzastein legen. Die Tomatensauce gleichmäßig darauf verteilen. Den Mozzarella in kleine Stücke zupfen und großzügig auf der " +
                "Sauce verteilen. Wer mag, kann jetzt auch ein paar frische Basilikumblätter darauf legen – sie verleihen der Pizza ein intensives, leicht würziges Aroma. Die Pizza wird im heißen Ofen etwa 7" +
                " bis 10 Minuten gebacken, bis der Rand goldbraun und knusprig ist und der Mozzarella schön geschmolzen und leicht gebräunt ist.",
            duration: {
                time: 120,
                dimension: 'MIN'
            }
        };



  return (
    <>
        <NavBar login={login} logout={logout} />
        <Routes>
            <Route path={'/recipes/breakfast'} element={<Recipes category={'BREAKFAST'} />} />
            <Route path={'/recipes/lunch'} element={<Recipes category={'LUNCH'} />} />
            <Route path={'/recipes/dinner'} element={<Recipes category={'DINNER'} />} />
            <Route path={'/recipes/snack'} element={<Recipes category={'SNACK'} />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path={'/recipe/:id'} element={<Recipe />} />
            <Route path={"/aisearch"} element={<AiSearch/>}/>
            <Route path={'/'} element={<Home />} />
            <Route element={<ProtectedRoute user={user} />}>
                <Route>Dashboard</Route>
            </Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App;
