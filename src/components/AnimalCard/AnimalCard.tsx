import { Link } from "react-router";
import { IAnimal } from "../../models/IAnimal";

interface IAnimalCard {
  animal: IAnimal;
}

export const AnimalCard = (props: IAnimalCard) => {
  return (
    <div>
      <h5>{props.animal.name}</h5>
      <h6>{props.animal.latinName}</h6>
      <p>{props.animal.lastFed}</p>
      <img src={props.animal.imageUrl} alt={props.animal.name} />
      <div>
        <Link to={"/animal/detail"}>Läs mer...</Link>
      </div>
    </div>
  );
};
