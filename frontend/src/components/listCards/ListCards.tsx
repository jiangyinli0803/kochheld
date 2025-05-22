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
        image: "https://images.unsplash.com/photo-1650092194571-d3c1534562be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 120,
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Avocado", "Brot", "Ei"],
        instruction: "Avocado zerdrücken, Brot toasten, Ei kochen und alles kombinieren.",
        category: "BREAKFAST"
    },
    {
        id: "2",
        name: "Pancakes mit Beeren",
        image: "https://images.unsplash.com/photo-1590137869152-5da5e617667e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 300,
        description: "Fluffige Pfannkuchen mit frischen Beeren und Ahornsirup.",
        ingredients: ["Mehl", "Milch", "Ei", "Beeren", "Ahornsirup"],
        instruction: "Teig zubereiten, in der Pfanne backen, mit Beeren und Sirup servieren.",
        category: "BREAKFAST"
    },
    {
        id: "3",
        name: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=3178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 600,
        description: "Knuspriges Brot mit frischer Avocado und Ei – perfekt für ein schnelles Frühstück.",
        ingredients: ["Römersalat", "Hähnchenbrust", "Croutons", "Parmesan", "Caesar-Dressing"],
        instruction: "Hähnchen braten, Salat schneiden, alles vermengen und servieren",
        category: "LUNCH"
    },
    {
        id: "4",
        name: "Spaghetti Bolognese",
        image: "https://images.unsplash.com/photo-1600803734709-83f30a78e312?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 1800,
        description: "Klassische italienische Pasta mit würziger Fleischsauce.",
        ingredients: ["Spaghetti", "Hackfleisch", "Tomaten", "Zwiebel", "Knoblauch"],
        instruction: "Sauce zubereiten, Spaghetti kochen und mit Sauce vermengen.",
        category: "DINNER"
    },
    {
        id: "5",
        name: "Caprese-Salat",
        image: "https://plus.unsplash.com/premium_photo-1677619680535-c3d453823b9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 300,
        description: "Einfacher Salat mit Tomaten, Mozzarella und frischem Basilikum.",
        ingredients: ["Tomaten", "Mozzarella", "Basilikum", "Olivenöl", "Salz"],
        instruction: "Zutaten in Scheiben schneiden, anrichten und mit Öl und Salz würzen.",
        category: "SNACK"
    },
    {
        id: "6",
        name: "Linsensuppe",
        image: "https://images.unsplash.com/photo-1647453078824-f234fac7b054?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 2400,
        description: "Herzhafte Suppe mit roten Linsen, Karotten und Gewürzen.",
        ingredients: ["Rote Linsen", "Karotten", "Zwiebel", "Knoblauch", "Brühe"],
        instruction: "Gemüse anbraten, Linsen hinzufügen, mit Brühe kochen lassen.",
        category: "DINNER"
    },
    {
        id: "7",
        name: "Obstsalat",
        image: "https://plus.unsplash.com/premium_photo-1663852297521-b1b7183b4b46?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 300,
        description: "Frischer Mix aus saisonalem Obst – gesund und lecker.",
        ingredients: ["Apfel", "Banane", "Trauben", "Orange", "Zitronensaft"],
        instruction: "Obst schneiden, vermengen und mit Zitronensaft beträufeln.",
        category: "SNACK"
    },
    {
        id: "8",
        name: "Omelett mit Gemüse",
        image: "https://images.unsplash.com/photo-1630684789447-2484443c6c1b?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: 420,
        description: "Schnelles Omelett mit Paprika, Zwiebeln und Käse.",
        ingredients: ["Eier", "Paprika", "Zwiebel", "Käse", "Milch"],
        instruction: "Gemüse anbraten, Eier verquirlen, in der Pfanne stocken lassen.",
        category: "BREAKFAST"
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
                                Dauer: {recipe.duration}
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
