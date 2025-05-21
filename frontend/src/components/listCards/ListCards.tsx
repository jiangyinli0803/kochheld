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
    },
    {
        id: "2",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "3",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."
    },
    {
        id: "4",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "5",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "6",
        name: "Avocado Toast",
        image: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "7",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."
    },
    {
        id: "8",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "9",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "10",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        duration: { time: 10, dimension: "min" },
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren."

    },
    {
        id: "11",
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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