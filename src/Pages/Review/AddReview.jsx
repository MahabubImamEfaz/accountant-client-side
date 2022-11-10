import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddReview = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      reviewer: name,
      email,
      image,
    };
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mt-10 mb-5 text-center text-[#274C77] font-bold">
        Kindly add your precious review
      </h1>
      <div className="w-[500px] mx-auto">
        <form onSubmit={handleReview}>
          <h2 className="font-bold text-[#274C77] mt-5 mb-5 "> {title}</h2>
          <h4 className="font-bold text-[#274C77] mt-5 mb-5 ">
            Price: {price}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-ghost w-full  input-bordered mb-3"
            />

            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-ghost w-full  input-bordered mb-3"
            />
            <input
              name="image"
              type="text"
              placeholder="image url"
              className="input input-ghost w-full  input-bordered mb-3"
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full mb-3"
            placeholder="Your Message"
            required
          ></textarea>

          <input
            className="btn bg-[#274c77] mb-5"
            type="submit"
            value="Place Your Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
