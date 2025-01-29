import { IAnimals } from "./IAnimals";

export interface IAnimalsExt extends IAnimals {
  shortDescription: string;
  longDescription: string;
  lastFed: string;
}
