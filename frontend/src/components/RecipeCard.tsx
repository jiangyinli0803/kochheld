import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

import type {IRecipe} from "../interfaces/IRecipe.ts";

type Props = {
  recipe: IRecipe;
};


function RecipeCard(props: Props) {
    const recipe: IRecipe = props.recipe;

    return (
        <>
            <Card sx={{ minWidth: {xs: '100%'}, maxWidth: {sm: 180}}}>
                <CardActionArea href={`/recipe/${recipe.id}`}>
                    <CardMedia
                        component={'img'}
                        alt={recipe.name}
                        image={recipe.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {recipe.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {recipe.description}
                        </Typography>
                        <Box component={'div'} sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant="caption" fontSize={'inherit'} sx={{color: 'text.secondary', paddingTop: '2px'}}>
                                {recipe.duration && recipe.duration.time} {recipe.duration && recipe.duration.dimension}
                            </Typography>
                            <TimerOutlinedIcon fontSize={'small'} sx={{marginLeft: '.2rem'}}></TimerOutlinedIcon>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default RecipeCard;