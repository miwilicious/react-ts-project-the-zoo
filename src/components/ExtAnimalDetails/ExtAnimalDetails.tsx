import { Link } from "react-router";
import { IAnimalExt } from "../../models/IAnimalExt";
import { formatLastFed } from "../../utils/dateUtils";
import { FeedingStatus } from "../FeedingStatus.tsx/FeedingStatus.tsx";

interface IExtAnimalDetailsProps {
  animal: IAnimalExt;
}

export const ExtAnimalDetails = (props: IExtAnimalDetailsProps) => {
  return (
    <div className="container-fluid justify-content-center d-flex">
      <div className="text-center pt-5">
        <h5>
          {props.animal.name} ({props.animal.yearOfBirth})
        </h5>
        <p>{props.animal.latinName}</p>
        <img
          src={props.animal.imageUrl}
          alt={props.animal.name}
          className="rounded w-100 my-2"
        />
        <p>Last fed: {formatLastFed(props.animal.lastFed)}</p>
        <FeedingStatus lastFed={props.animal.lastFed} />
        <p className="mt-2">{props.animal.shortDescription}</p>
        <p>{props.animal.longDescription}</p>
      </div>
      <Link
        to={"/animals"}
        className="justify-content-center align-items-center text-center"
      >
        Back
      </Link>
    </div>
  );
};
