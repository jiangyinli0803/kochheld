import Grid from '@mui/material/Grid2';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import axios from "axios";

import type {IRecipe} from "../interfaces/IRecipe.ts";
import RecipeCard from "../components/RecipeCard.tsx";

type Props = {
    category?: string;
};

function Recipes(props: Props) {
    const [recipes, setRecipes] = useState<IRecipe[]>();

    function getRecipes(): void {
        axios.get('/api/recipes')
            .then(res => setRecipes(res.data))
            .catch(error => console.log(error));
    }

    function getRecipesBvCategory(category: string): void {
        axios.get(`/api/recipes/${category}`)
            .then(res => setRecipes(res.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        if (!props.category) {
            getRecipes();
        } else {
            console.log(props.category)
            getRecipesBvCategory(props.category)
        }
    }, [props.category]);

    return(
        <>
            <Container>
                <Box sx={{paddingTop: 12}}>
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
                </Box>
            </Container>
        </>
    );
}

export default Recipes;