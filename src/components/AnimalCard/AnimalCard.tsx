import { useState, useEffect } from "react";
import { Link } from "react-router";
import { IAnimal } from "../../models/IAnimal";
import { formatLastFed } from "../../utils/dateUtils";
import "./AnimalCard.scss";
import { FeedingStatus } from "../FeedingStatus.tsx/FeedingStatus.tsx";

const defaultImage =
  "https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog=";

interface IAnimalCardProps {
  animal: IAnimal;
}

export const AnimalCard = (props: IAnimalCardProps) => {
  const [lastFed, setLastFed] = useState<string>(props.animal.lastFed);
  const [imageUrl, setImageUrl] = useState<string>(
    props.animal.imageUrl || defaultImage
  );

  useEffect(() => {
    const savedLastFed = localStorage.getItem(
      `animal-${props.animal.id}-lastFed`
    );
    if (savedLastFed) {
      setLastFed(savedLastFed);
    }
  }, [props.animal.id]);
  return (
    <div className="animal-card text-center">
      <div>
        <span className="h1 shadow-into-light ">{props.animal.name}</span>
        <FeedingStatus lastFed={lastFed} />
      </div>

      <p className="small pt-2">Last fed: {formatLastFed(lastFed)}</p>
      <Link to={`/animal-details/${props.animal.id}`}>
        <img
          className="rounded mx-auto img-thumbnail "
          src={imageUrl}
          alt={props.animal.name}
          onError={() => setImageUrl(defaultImage)}
        />
      </Link>
    </div>
  );
};
