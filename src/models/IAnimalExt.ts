import { IAnimal } from "./IAnimal";

export interface IAnimalExt extends IAnimal {
  shortDescription: string;
  longDescription: string;
}
