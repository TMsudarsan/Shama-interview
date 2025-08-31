import React from "react";
import bgImg from "../assets/f1car.jpg";

const Landing = () => {
  return (
    <div
      className="max-w-full h-screen bg-black bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-white text-[3rem] sm:text-[4rem] lg:text-[7rem] text-center font-bold  pt-10">
        <span className="font-light">BANK</span> YOURSELF 
      </h1>
      <p className="text-white text-[16px] sm:text-[20px] text-center mt-20 lg:mt-24">
        Instant and reliable payments for businesses and individuals, built on
        Multi-Party Computation (MPC) custody.
      </p>
      <div className=" flex flex-col md:flex-row  justify-center items-center gap-4 py-5">
        <button className="px-8 py-4 rounded-full text-xl bg-[#1c68f4] hover:bg-[#387EFF] text-white">
          Get Started Now
        </button>
        <button className="px-8 py-4 rounded-full text-xl font-semibold text-black bg-[#cac6c6] hover:bg-[#FFFFFF]">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Landing;
