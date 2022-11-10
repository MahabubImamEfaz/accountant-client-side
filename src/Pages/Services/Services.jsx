import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import DisplayServiceCard from "../Home/DisplayServiceCard";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mx-auto">
      <h1 className=" text-3xl md:text-4xl font-bold text-center mt-7 mb-7 text-[#274C77]">
        All the Available Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        {data.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
