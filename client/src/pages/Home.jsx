import React from "react";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import home_intro from "../assets/images/home_intro.png";
const Home = () => {
  return (
    <div className="w-full h-full">
      <HomeNavbar />
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:mt-10">
        <div className=" flex flex-col md:max-w-2xl lg:max-w-2xl justify-center items-center text-center gap-2 lg:text-left lg:items-start ">
          <h1 className=" text-6xl text-sigmaPrimary">
            Managing money, made simple
          </h1>
          <h1 className=" text-2xl ">
            Effortlessly track your cashflow and gain insights that’ll help you
            see easy opportunities to save.
          </h1>
          <button className=" bg-sigmaPrimary text-white rounded-lg w-48 p-2 mt-2 ">
            Sign Up
          </button>
        </div>
        <div className="h-96 lg:h-auto  m-4 ">
          <img
            className="w-full max-w-xl h-full object-fill"
            src={home_intro}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
