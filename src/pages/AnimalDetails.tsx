import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ExtAnimalDetails } from "../components/ExtAnimalDetails/ExtAnimalDetails";
import { IAnimalExt } from "../models/IAnimalExt";
import { getAnimalById } from "../services/animalService";

export const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<IAnimalExt | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await getAnimalById(id);
        setAnimal(data);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      {animal ? (
        <ExtAnimalDetails animal={animal} />
      ) : (
        <h2 className="py-5 text-center">Loading...</h2>
      )}
    </div>
  );
};
