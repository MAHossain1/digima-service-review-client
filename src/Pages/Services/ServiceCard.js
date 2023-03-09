import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, description, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <p>
          {description.length > 250 ? (
            <>
              {description.slice(0, 250) + "..."}{" "}
              <Link to={`/services/${_id}`} className="text-blue-500">
                Read more
              </Link>{" "}
            </>
          ) : (
            <>{description}</>
          )}
        </p>
        {/* <p>{description}</p> */}
        <div className="card-actions">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-success btn-outline">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
