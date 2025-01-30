import { Link } from "react-router";
import { IAnimal } from "../../models/IAnimal";
import { formatLastFed } from "../../utils/dateUtils";

import "./AnimalCard.scss";
import { FeedingStatus } from "../FeedingStatus.tsx/FeedingStatus.tsx";

interface IAnimalCardProps {
  animal: IAnimal;
}

export const AnimalCard = (props: IAnimalCardProps) => {
  return (
    <div className="animal">
      <h4>{props.animal.name}</h4>
      <span className="font-italic">{props.animal.latinName}</span>
      <p>Last fed: {formatLastFed(props.animal.lastFed)}</p>

      <FeedingStatus lastFed={props.animal.lastFed} />

      <img
        className="rounded mx-auto img-thumbnail"
        src={props.animal.imageUrl}
        alt={props.animal.name}
      />
      <div className="py-2">
        <Link to={`/animal-details/${props.animal.id}`}>Read more...</Link>
      </div>
    </div>
  );
};
