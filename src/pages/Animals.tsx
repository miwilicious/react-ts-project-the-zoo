import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { AnimalCollection } from "../components/AnimalCollection/AnimalCollection";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]); // ✅ Array of animals

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimals();
      setAnimals(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid text-center">
      <h1 className="py-4">Our Animals</h1>
      <AnimalCollection animals={animals} />
    </div>
  );
};
