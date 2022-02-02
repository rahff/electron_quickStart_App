import { Cake } from "./cake";
import { DecoratedCake } from "./decorator-cake";
import { typeOfCake } from "./interfaces/index";
import { CakeDecorator } from './interfaces/index';

export class CakeFactory implements CakeDecorator {
  public cake!: Cake | DecoratedCake;
  constructor() {
  }

  createCake(name: typeOfCake, ingredients?:string[]): Cake | DecoratedCake {
    const price = this.getInitialPriceOfCake(name);
    this.cake = new Cake(name, price);
    if(ingredients){
      this.addDecorationOnCake(ingredients);
    }
    return this.cake
  }
  private getInitialPriceOfCake(type: typeOfCake): number {
    let price = undefined;
    switch (type.name) {
      case "cookies":
        price = 3;
        break;
      case "brownie":
        price = 3.5;
        break;
      case "cupCake":
        price = 4;
        break;
      default:
        throw new Error("unknown cake");
    }
    return price;
  }
  addDecorationOnCake(ingrendients: string[]): void {
    if(ingrendients.length){
      this.cake.price = this.setPrice(ingrendients.length);
      this.cake = new DecoratedCake(this.cake, ingrendients);
  }else{
      this.cake = new Cake(this.cake.name, this.cake.price)
  }
  }
   setPrice(nbrIngrdient: number): number {
      return this.cake.price + (nbrIngrdient / 2);
  }
}
