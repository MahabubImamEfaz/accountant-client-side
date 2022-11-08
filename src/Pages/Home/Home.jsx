import React from "react";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
import DisplayServices from "./DisplayServices";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <section className=" ">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl ">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Certified Chartered{" "}
            <span className="text-[#274C77]">ACCOUNTANT</span>
          </h1>
          <p className="px-6 mt-4 mb-6 text-xl">
            <span style={{ color: "#274C77", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Professional.",
                  "Adherence to Ethics.",
                  "Integrity & Confidentiality",
                  "Analytical Skills.",
                ]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="">
            <button className="inline-block px-4 py-2.5 bg-[#274C77] text-white font-bold text-xl leading-tight uppercase rounded shadow-md hover:bg-[#A3CEF1] hover:shadow-lg focus:bg-[#A3CEF1] focus:shadow-lg focus:text focus:outline-none focus:ring-0 active:bg-[#274C77] active:shadow-lg transition duration-150 ease-in-out">
              ALL SERVICES
            </button>
          </div>
        </div>
      </section>
      {/* about section */}
      <About></About>
      {/* services section */}
      <DisplayServices></DisplayServices>
    </div>
  );
};

export default Home;
