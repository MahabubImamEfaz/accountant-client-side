import React from "react";

const About = () => {
  return (
    <div className=" mt-8 bg-[#E7ECEF]">
      <div className="container mx-auto p-20">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.ibb.co/HxdfQfF/photo-1554224155-3a58922a22c3-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxh.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs font-bold uppercase dark:text-[#274c77]">
              ABOUT
            </span>
            <h3 className="text-3xl font-bold text-[#274c77] mt-3">
              ICAB certified professional CA
            </h3>
            <p className="my-6 dark:text-gray-400">
              Based in Dhaka, Bangladesh. Working for near 15 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
