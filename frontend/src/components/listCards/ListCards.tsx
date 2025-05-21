import * as React from "react";
import type {IRecipe} from "../../interfaces/IRecipe.ts";
import './ListCards.css';

type Props = {
    list: IRecipe[]
};

export const sampleRecipes = [
    {
        id: "1",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."
    }
]

const ListCards: React.FC<Props> = ({ list }) => {
    const recipesToShow = list ?? sampleRecipes;

    return (
        <>
            <h2 className={"titleName"}>Ähnliche Rezepte</h2>
        <div className="scroll-container">
            {recipesToShow.map((recipe) => (

                <div key={recipe.id} className="card">

                    {recipe.image && (
                        <div className="image-container">
                            <img className="image" src={recipe.image} alt={recipe.name} />
                        </div>
                    )}
                    <div className="card-content">
                        <h2 className="name">{recipe.name}</h2>
                        {recipe.duration && (
                            <h4 className="duration">
                                Dauer: {recipe.duration.time} {recipe.duration.dimension}
                            </h4>
                        )}
                        <p className="description">{recipe.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default ListCards;
