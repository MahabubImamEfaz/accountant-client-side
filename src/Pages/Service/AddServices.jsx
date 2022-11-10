import React from "react";

const AddServices = () => {
  const handleAddService = (event) => {
    const form = event.target;
    const service = form.service.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const id = form.id.value;

    const services = {
      service_id: id,
      title: service,
      img: image,
      description: description,
      price: price,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl mt-10 mb-5 text-center text-[#274C77] font-bold">
          Kindly add your precious review
        </h1>
        <div className="w-[500px] mx-auto">
          <form onSubmit={handleAddService}>
            <h2 className="font-bold text-[#274C77] mt-5 mb-5 "> {}</h2>
            <h4 className="font-bold text-[#274C77] mt-5 mb-5 ">Price: {}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                name="service"
                type="text"
                placeholder="service"
                className="input input-ghost w-full  input-bordered mb-3"
              />

              <input
                name="price"
                type="text"
                placeholder="price"
                className="input input-ghost w-full  input-bordered mb-3"
              />
              <input
                name="image"
                type="text"
                placeholder="image url"
                className="input input-ghost w-full  input-bordered mb-3"
              />
              <input
                name="id"
                type="text"
                placeholder="id"
                className="input input-ghost w-full  input-bordered mb-3"
              />
            </div>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24 w-full mb-3"
              placeholder="description"
              required
            ></textarea>

            <input
              className="btn bg-[#274c77] mb-5"
              type="submit"
              value="Add Service"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
