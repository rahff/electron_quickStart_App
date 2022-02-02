import { Cake } from "./cake";




export class DecoratedCake extends Cake {
    public ingredients!: string[] | null;
    constructor(cake: Cake,ingredients?: string[] | null){
        super(cake.name, cake.price);
        if(ingredients){
            this.ingredients = ingredients;
        }
    }
}