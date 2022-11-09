import React, { useEffect, useState } from "react";
import DisplayServiceCard from "./DisplayServiceCard";

const DisplayServices = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/displayservices")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-20 pb-10 ">
      <h1 className="text-3xl font-bold text-[#274c77] text-center mt-5 mb-10">
        SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((service) => (
          <DisplayServiceCard
            key={service.service_id}
            service={service}
          ></DisplayServiceCard>
        ))}
      </div>
    </div>
  );
};

export default DisplayServices;
