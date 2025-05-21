import * as React from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

import './Recipe.css';
import type {IRecipe} from "../../interfaces/IRecipe.ts";
import bgImage from '../../assets/images/background.png';
import {useEffect} from "react";


const Recipe: React.FC = () => {
    const [recipe, setRecipe] = React.useState<IRecipe>();
    const { id } = useParams();
    const location = useLocation();
    const entry: IRecipe = location.state?.recipe as IRecipe;

    function getRecipe(): void {
        axios.get(`api/recipe/${id}`)
            .then(res => setRecipe(res.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        if (!entry) getRecipe();
    }, []);

    return (
        <div
            className="recipe-card-wrapper"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="recipe-card">
                <div className="top-row">
                    <img
                        className="image"
                        src={entry ? entry.image : recipe && recipe.image}
                        alt={entry ? entry.name : recipe && recipe.name} />

                    <div className="text-columns">
                        <div className="description">
                            <h2 className="title">
                                {entry ? entry.name : recipe && recipe.name}
                            </h2>
                            <p>
                                {entry ? entry.description : recipe && recipe.description}
                            </p>
                        </div>

                        <div className="ingredients">
                            <h3>Inhaltsstoffe:</h3>
                            <ol>
                                {
                                    entry ?
                                        entry.ingredients.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )
                                        : recipe && recipe.ingredients.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )
                                }
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="steps">
                    <h3>Zubereitung</h3>
                    <p>{entry ? entry.instruction : recipe && recipe.instruction}</p>
                    &nbsp;
                    <p>Dauer: {entry ? entry.duration : recipe && recipe.duration} Min.</p>
                </div>
            </div>
  </div>
    );
};




export default Recipe;