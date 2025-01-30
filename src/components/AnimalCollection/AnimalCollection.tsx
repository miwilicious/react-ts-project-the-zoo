import { IAnimal } from "../../models/IAnimal";
import { AnimalCard } from "../AnimalCard/AnimalCard";

interface IAnimalCollectionProps {
  animals: IAnimal[];
}

export const AnimalCollection = ({ animals }: IAnimalCollectionProps) => {
  return (
    <div className="container">
      <div className="row">
        {animals.map((animal) => (
          <div key={animal.id} className="col-md-4 col-lg-3 col-12 mb-4">
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};
