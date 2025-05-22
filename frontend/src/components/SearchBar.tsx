
import axios from "axios";
import {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard.tsx";
import type {IRecipe} from "../interfaces/IRecipe.ts";
import {Link, useParams} from "react-router-dom";


export default function SearchBar(){
    //URL 参数要通过 useParams 获取，不要直接传 props

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const {searchText} = useParams();

    useEffect(() => {
        axios.get("/api/allrecipes", {params: {searchText}})
             .then(resp => {setRecipes(resp.data)})
             .catch(err => {console.log(err);})
        }, [searchText]);


    return(
        <>
            {recipes.length === 0 ? (
                <h2 className="message">Leider haben keine Rezepte in unserer DatenBank gefunden.
                <br />Bitte Versuchen Sie unserer
                    <Link to={"/aisearch"} className="ai-button"> AI-Rezepte</Link></h2>
            ) : (
                recipes.map((r) => (
                    <RecipeCard key={r.id} recipe={r} />
                ))
            )}
        </>

    )
}
