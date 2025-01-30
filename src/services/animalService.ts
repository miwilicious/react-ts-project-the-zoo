import { IAnimal } from "../models/IAnimal";
import { IAnimalExt } from "../models/IAnimalExt";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async (): Promise<IAnimal[]> => {
  const cachedAnimals = localStorage.getItem("animal");

  if (cachedAnimals) {
    console.log("Using cached animal data.");
    return JSON.parse(cachedAnimals);
  }

  console.log("Fetching animals from API...");
  try {
    const data = await get<IAnimal[]>(BASE_URL);
    localStorage.setItem("animals", JSON.stringify(data)); // Store in localStorage
    return data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    return [];
  }
};

export const getAnimalById = async (id: string): Promise<IAnimalExt | null> => {
  const animals = await getAnimals();
  const foundAnimal = animals.find((animal) => animal.id === Number(id));

  if (foundAnimal) {
    return foundAnimal as IAnimalExt;
  }

  console.log("Fetching animal by ID from API...");
  try {
    const data = await get<IAnimalExt>(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching animal:", error);
    return null;
  }
};
