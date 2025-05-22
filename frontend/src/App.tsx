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
import SearchBar from "./components/SearchBar.tsx";
import Box from "@mui/material/Box";

function App() {

    const [searchText, setSearchText] = useState("");
    const handleSearch = (value:string) => {
        setSearchText(value);
    };

    function login(){
     const host:string = window.location.host === "localhost:5173"?
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

    const [user, setUser] = useState<string | undefined | null>();

    const loadUser = ()=>{
            axios.get("/api/auth")
              .then(response => {console.log(response.data);setUser(response.data)})
                .catch(() => setUser(null))
    }

    useEffect(() => {
        loadUser()
    }, []);

    function greetings(user: string | null | undefined) {
        if (!user) return null;
        return (
            <Box sx={{ color: 'red', fontWeight: 'bold', fontSize: '18px', marginLeft: '40px' }}>
                Hallo, {user}!
            </Box>
        );
    }

  return (
    <>
        {greetings(user)}
        <NavBar login={login} logout={logout} searchText={searchText} onSearchChange={handleSearch}/>
        <Routes>
            <Route path={'/recipes/breakfast'} element={<Recipes category={'BREAKFAST'} />} />
            <Route path={'/recipes/lunch'} element={<Recipes category={'LUNCH'} />} />
            <Route path={'/recipes/dinner'} element={<Recipes category={'DINNER'} />} />
            <Route path={'/recipes/snack'} element={<Recipes category={'SNACK'} />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path={'/recipe/:id'} element={<Recipe />} />
            <Route path={"/aisearch"} element={<AiSearch />} />
            <Route path={"/search/:searchText"} element={<SearchBar />}/>
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
