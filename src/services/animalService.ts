// import { IAnimals } from "../models/IAnimals";
// import { IAnimalsExt } from "../models/IAnimalsExt";
// import { get } from "./serviceBase";
// const BASE_URL = "https://animals.azurewebsites.net/api/animals";

// export const getAnimals = async () => {
//   const data = await get<IAnimals[]>(BASE_URL);
//   return data;
// };

// export const getAnimalById = async (id: string) => {
//   const data = await get<IAnimalsExt>(`${BASE_URL}/${id}`);
//   return data;
// };
// ^^ OG CODE WITHOUT TRYING TO MINIMIZE THE API CALLS IF I NEED TO USE IT ^^

import { IAnimals } from "../models/IAnimals";
import { IAnimalsExt } from "../models/IAnimalsExt";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

// Fetch all animals with caching
export const getAnimals = async (): Promise<IAnimals[]> => {
  // Check if animals are stored in localStorage
  const cachedAnimals = localStorage.getItem("animals");

  if (cachedAnimals) {
    console.log("Using cached animal data.");
    return JSON.parse(cachedAnimals);
  }

  console.log("Fetching animals from API...");
  try {
    const data = await get<IAnimals[]>(BASE_URL);
    localStorage.setItem("animals", JSON.stringify(data)); // Store in localStorage
    return data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    return [];
  }
};

// Fetch a specific animal by ID with caching
export const getAnimalById = async (
  id: string
): Promise<IAnimalsExt | null> => {
  // First, check if we already have the animals in localStorage
  const animals = await getAnimals();
  const foundAnimal = animals.find((animal) => animal.id === Number(id));

  if (foundAnimal) {
    return foundAnimal as IAnimalsExt;
  }

  console.log("Fetching animal by ID from API...");
  try {
    const data = await get<IAnimalsExt>(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching animal:", error);
    return null;
  }
};
