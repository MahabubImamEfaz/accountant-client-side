import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [testimony, setTestimony] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTestimony(data));
  }, [user?.email]);
  return (
    <div className="mx-auto">
      <h1>{testimony.length}</h1>
      <div className="grid grid-cols-3" mx-auto>
        {testimony.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
