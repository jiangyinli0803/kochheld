
import {Routes, Route} from "react-router-dom";

import './App.css';

import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AiSearch from "./components/AiSearch.tsx";
import axios from "axios";
import { useEffect } from "react";


function App() {

    function login(){
        const host:string = window.location.host === "localhost:5173" ?
            "http://localhost:8080/"
            :
            window.location.origin
        window.open(host + "/oauth2/authorization/github", "_self")
    }

    const loadUser = ()=>{
            axios.get("/api/auth")
              .then(response => console.log(response.data))
    }
    useEffect(() => {
        loadUser()
     }, []);



    return (
    <>
        <NavBar />

        <button onClick={login}>Login</button>

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
