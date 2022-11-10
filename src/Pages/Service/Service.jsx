import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
  const { title, description, img, price, _id } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mt-10 mb-5 text-center text-[#274C77] font-bold">
        {title}
      </h1>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body container mx-auto">
          <p>{description}</p>
          <h2 className="card-title">Price: {price}</h2>
          <div className="card-actions justify-end">
            <Link to={`/addreview/${_id}`}>
              <button className="btn bg-[#274c77]">Reviews</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
