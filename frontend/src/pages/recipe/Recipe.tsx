import bgImage from '../../assets/images/background.png';
import * as React from "react";

import './Recipe.css';
import type {IRecipe} from "../../interfaces/IRecipe.ts";
import ListCards, {sampleRecipes} from "../../components/listCards/ListCards.tsx";


type Props = {
    recipe: IRecipe
}



const Recipe: React.FC<Props> = (props) => {



    return (
        <div
            className="recipe-card-wrapper"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="recipe-card">
                <div className="top-row">
                    <img className="image" src={props.recipe.image} alt={props.recipe.name} />

                    <div className="text-columns">
                        <div className="description">
                            <h2 className="title">{props.recipe.name}</h2>
                            <p>{props.recipe.description}</p>
                        </div>
                        <div className="ingredients">
                            <h3>Inhaltsstoffe:</h3>
                            <ol>
                                {props.recipe.ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="steps">
                    <h3>Zubereitung</h3>
                    <p>{props.recipe.instruction}</p>
                </div>
            </div>
            <div className="list-wrapper" style={{ margin: "3rem 0" }}>
                <ListCards list={sampleRecipes} />
            </div>
  </div>
    );
};


export default Recipe;