import Grid from '@mui/material/Grid2';

import type {IRecipe} from "../interfaces/IRecipe.ts";
import RecipeCard from "../components/RecipeCard.tsx";
import axios from "axios";
import {useEffect, useState} from "react";


function Recipes() {
    const [recipes, setRecipes] = useState<IRecipe[]>();

    function getRecipes(): void {
        axios.get('api/recipes')
            .then(res => setRecipes(res.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return(
        <>
            <Grid container columnSpacing={2} rowSpacing={4}>
                {
                    recipes && recipes.map(recipe => {
                        return <Grid
                            key={recipe.id}
                            size={{xs: 12, sm: 4, md: 3, lg: 2}}
                            flexGrow={1}
                        >
                            <RecipeCard recipe={recipe} />
                        </Grid>
                    })
                }
            </Grid>
        </>
    );
}

export default Recipes;