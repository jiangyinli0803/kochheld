import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import type {IRecipe} from "../interfaces/IRecipe.ts";
import {Link} from "react-router-dom";
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";

type Props = {
  recipe: IRecipe;
  deleteCard: (id:string) => void;
};


function RecipeCard(props: Props) {
    const recipe: IRecipe = props.recipe;

    return (
        <>
            <Card sx={{ minWidth: {xs: '100%'}, maxWidth: {sm: 180}}}>
                <CardActionArea>
                    <Link to={`/recipe/${recipe.id}`} state={{recipe}}>
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
                                    {recipe.duration} Min.
                                </Typography>
                                <TimerOutlinedIcon fontSize={'small'} sx={{marginLeft: '.2rem'}}></TimerOutlinedIcon>
                                <IconButton onClick={() => recipe.id && props.deleteCard(recipe.id)} color="error">
                                    <Delete />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </>
    );
}

export default RecipeCard;
