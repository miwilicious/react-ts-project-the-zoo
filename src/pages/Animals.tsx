import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { AnimalDetails } from "./AnimalDetails";

export const Animals = () => {
  const [animal, setAnimal] = useState<IAnimal>();

  useEffect(() => {
    const getData = async () => {
      const data = await getAnimals();
      setAnimal(data);
    };
    if (animal.length > 0) return;
    getData();
  });
  return (
    <>
      <div className="container-fluid justify-content-center d-flex">
        <AnimalDetails animal={animal}></AnimalDetails>
      </div>
    </>
  );
};
