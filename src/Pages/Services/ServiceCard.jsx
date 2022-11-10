import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, description, img, price, _id } = service;
  return (
    <div className="mx-auto mb-10">
      <PhotoProvider>
        <div className="mx-auto">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <PhotoView src={img}>
                <img src={img} alt="services" />
              </PhotoView>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>
                {description.length > 50 ? (
                  <p>{description.slice(0, 100) + "..."}</p>
                ) : (
                  <p>{description}</p>
                )}
              </p>
              <p className="font-semibold text-[#8B8C89]">{price}</p>
              <div className="card-actions justify-end">
                <Link to={`/service/${_id}`}>
                  <button className="btn bg-[#274c77]">View the Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default ServiceCard;
