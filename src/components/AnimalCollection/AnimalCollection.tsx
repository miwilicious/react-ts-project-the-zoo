import { IAnimal } from "../../models/IAnimal";
import { AnimalCard } from "../AnimalCard/AnimalCard";

interface IAnimalCollectionProps {
  animals: IAnimal[];
}

export const AnimalCollection = (props: IAnimalCollectionProps) => {
  return (
    <div className="animals">
      {props.animals.map((a: IAnimal) => (
        <AnimalCard animal={a} key={a.id} />
      ))}
    </div>
  );
};
