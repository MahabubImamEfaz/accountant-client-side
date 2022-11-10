import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllReviewCards from "./AllReviewCards";

const AlllReviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allreviews")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#274c77] text-center mt-5 mb-10">
        ALL REVIEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((review) => (
          <AllReviewCards key={review._id} review={review}></AllReviewCards>
        ))}
      </div>
      <div className="flex justify-center justify-items-center mt-5 mb-10">
        <Link to="/services">
          <button className="btn bg-[#274C77]">
            {" "}
            CHeckout our services <br /> and place your review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlllReviews;
