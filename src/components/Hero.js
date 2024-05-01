import React from "react";
import img1 from "../assets/illustration-intro.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
    >
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src={img1} alt="illustration" className="mx-auto" />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p className="mx-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="p-3 rounded-full w-52 bg-accentCyan hover:text-white hover:scale-95 duration-200 ease-in-out  ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
