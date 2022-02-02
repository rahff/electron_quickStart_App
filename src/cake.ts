
import { typeOfCake } from "./interfaces/index";

export class Cake  {
  public name!: typeOfCake;
  public price!: number;
  constructor(name: typeOfCake, price: number) {
    this.name = name;
    this.price = price;
  }
}
