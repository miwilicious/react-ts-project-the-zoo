import { Link } from "react-router";
import { IAnimalExt } from "../../models/IAnimalExt";

interface IExtAnimalDetails {
  animal: IAnimalExt;
}

export const ExtAnimalDetails = (props: IExtAnimalDetails) => {
  return (
    <div className="container-fluid justify-content-center d-flex">
      <div className="text-center pt-5">
        <h5>
          {props.animal.name} {props.animal.yearOfBirth}
        </h5>
        <p>{props.animal.latinName}</p>
        <img src={props.animal.imageUrl} alt={props.animal.name} />
        <p>{props.animal.isFed}</p>
        <span>{props.animal.lastFed}</span>
        <p>{props.animal.shortDescription}</p>
        <p>{props.animal.longDescription}</p>
      </div>
      <Link to={"/animals"}>Tillbaka</Link>
    </div>
  );
};
