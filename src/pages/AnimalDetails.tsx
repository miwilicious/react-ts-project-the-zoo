import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ExtAnimalDetails } from "../components/ExtAnimalDetails/ExtAnimalDetails";
import { IAnimalExt } from "../models/IAnimalExt";
import { getAnimalById } from "../services/animalService";

export const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<IAnimalExt>();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = await getAnimalById(id);
        setAnimal(data);
      }
    };
    if (animal) return;
    getData();
  });
  return <>{animal && <ExtAnimalDetails animal={animal} />}</>;
};
