export enum FoodChainType {
  Carnivorous = 'carnivorous',
  Herbivorous = 'herbivorous',
  Omnivorous = 'omnivorous',
}

interface IBasicAnimal {
  name: string;
  sound?: string;
  family: string;
  foodChainType: FoodChainType;
  whoAmI: () => void;
  makeSound: () => void;
}

interface IAnimalConstructor {
  name: string,
  sound?: string,
  family: string,
  foodChainType: FoodChainType
}

export class Animal implements IBasicAnimal {
  public name: string;
  public sound: string;
  public family: string;
  public foodChainType: FoodChainType;

  constructor(params: IAnimalConstructor) {
    this.name = params.name;
    this.sound = params.sound || '';
    this.family = params.family;
    this.foodChainType = params.foodChainType;
  }

  public whoAmI(): void {
    console.log(`I am a ${this.name}, my family is ${this.family}. My diet is ${this.foodChainType}.`);
    if (this.sound) {
      console.log([...Array(2).fill(this.sound)].join(', '));
    }
  }

  public makeSound(): void {
    console.log(this.sound);
  }
} 