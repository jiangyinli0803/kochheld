import Grid from '@mui/material/Grid2';

import type {IRecipe} from "../interfaces/IRecipe.ts";
import RecipeCard from "../components/RecipeCard.tsx";

type Props = {
    recipes: IRecipe[];
};


function Recipes(props: Props) {
    const recipes: IRecipe[] = props.recipes;
    // const rows = recipes.length /

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