import { Cake } from "../cake";

export interface typeOfCake {
    name: "cookies" | "brownie" | "cupCake"
}
export interface CakeDecorator {
    cake: Cake;
     addDecorationOnCake: (ingrendients: string[]) =>  void;
     setPrice: (nbrIngrdient: number)=> number
}