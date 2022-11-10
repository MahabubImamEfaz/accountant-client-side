import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [testimony, setTestimony] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTestimony(data));
  }, [user?.email, refresh]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure want to delete your review?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("review deleted");
            setRefresh(!refresh);
            const remaining = testimony.filter((rev) => rev._id !== id);
            setTestimony(remaining);
          }
        });
    }
  };

  return (
    <div className="mx-auto">
      <h1>{testimony.length}</h1>
      <div className="grid grid-cols-3" mx-auto>
        {testimony.map((review) => (
          <ReviewCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
