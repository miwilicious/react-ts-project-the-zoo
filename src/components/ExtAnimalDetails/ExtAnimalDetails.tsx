import { useState, useEffect } from "react";
import "./ExtAnimalDetails.scss";
import { Link } from "react-router";
import { IAnimalExt } from "../../models/IAnimalExt";
import { formatLastFed } from "../../utils/dateUtils";
import { FeedingStatus } from "../FeedingStatus.tsx/FeedingStatus.tsx";

interface IExtAnimalDetailsProps {
  animal: IAnimalExt;
}

export const ExtAnimalDetails = (props: IExtAnimalDetailsProps) => {
  const [lastFed, setLastFed] = useState<string>(props.animal.lastFed);
  const [isFed, setIsFed] = useState<boolean>(true);

  useEffect(() => {
    const savedLastFed = localStorage.getItem(
      `animal-${props.animal.id}-lastFed`
    );
    if (savedLastFed) {
      setLastFed(savedLastFed);
      const lastFedTime = new Date(savedLastFed).getTime();
      const fourHoursAgo = Date.now() - 4 * 60 * 60 * 1000;

      if (lastFedTime < fourHoursAgo) {
        setIsFed(false);
      }
    } else {
      setIsFed(false);
    }
  }, [props.animal.id]);

  const handleFeedAnimal = () => {
    const now = new Date().toISOString();
    setLastFed(now);
    setIsFed(true);
    localStorage.setItem(`animal-${props.animal.id}-lastFed`, now);

    window.dispatchEvent(new Event("storage"));
  };
  return (
    <div className="align-items-center details d-flex">
      <div className=" row">
        <div className="justify-content-center d-flex h-100 ">
          <div className="col-md-6 col-12">
            <Link to={"/animals"} className="d-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>{" "}
              Back
            </Link>
            <img
              src={props.animal.imageUrl}
              alt={props.animal.name}
              className="rounded w-100 my-2"
            />
          </div>
          <div className="col-md-5 offset-md-1 col-12  my-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>
                {props.animal.name}, born {props.animal.yearOfBirth}.
              </h2>
              {!isFed && (
                <button
                  onClick={handleFeedAnimal}
                  className="btn btn-outline-dark noto"
                >
                  Feed {props.animal.name}
                </button>
              )}
            </div>
            <p className="cactus small">{props.animal.latinName}</p>
            <p>{props.animal.shortDescription}</p>
            <p>{props.animal.longDescription}</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-between">
            <p className="small">Last fed: {formatLastFed(lastFed)}</p>

            <div>
              <span className="h5">
                {props.animal.name} is{" "}
                {isFed ? "fed and happy!" : "hungry and sad"}
              </span>
              <FeedingStatus lastFed={lastFed} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
