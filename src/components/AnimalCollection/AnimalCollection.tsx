import { IAnimal } from "../../models/IAnimal";
import { AnimalCard } from "../AnimalCard/AnimalCard";
import "./AnimalCollection.scss";

interface IAnimalCollectionProps {
  animals: IAnimal[];
}

export const AnimalCollection = ({ animals }: IAnimalCollectionProps) => {
  return (
    <div className="container-fluid animal-collection">
      <h1 className="py-5 text-center sour-gummy">Our Animals</h1>

      <div className="row">
        {animals.map((animal) => (
          <div key={animal.id} className="col-md-6 col-lg-4 col-12 mb-4 px-4">
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};
