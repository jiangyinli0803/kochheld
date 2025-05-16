export interface IRecipe {
    id?: string;
    name: string;
    description: string;
    image?: string;
    ingredients: string[];
    instruction: string;
    duration?: {
        time: number;
        dimension: string;
    };
}