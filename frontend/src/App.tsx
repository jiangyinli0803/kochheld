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
            axios.get("/api/auth/me", {withCredentials: true})
              .then(response => setUser(response.data))
                .catch(() => setUser(null))
    }

    useEffect(() => {
        loadUser()
    }, []);


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
