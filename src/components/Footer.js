import React from "react";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";
import Social from "./Social";

const Footer = () => {
  const dataOne = [
    { id: 1, name: "604-837-6229", image: phoneIcon },
    {
      id: 2,
      name: "munaa.tsetsegmaa@gmail.com",
      image: emailIcon,
    },
  ];
  const dataTwo = [
    {
      id: 1,
      col: [
        { id: 1, name: "About" },
        { id: 2, name: "Jobs" },
        {
          id: 3,
          name: "Blog",
        },
        {
          id: 4,
          name: "Press",
        },
      ],
    },
    {
      id: 2,
      col: [
        { id: 1, name: "Contact Us" },
        { id: 2, name: "Terms" },
        {
          id: 3,
          name: "Privacy",
        },
      ],
    },
  ];
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto pt-12 px-5 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6">
            {dataOne.map((item) => {
              return (
                <div
                  className="flex items-center space-x-3 md:-mt-10"
                  key={item.id}
                >
                  <div className="w-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="scale-10"
                    />
                  </div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row ">
            {dataTwo.map((item) => {
              return (
                <div className="flex flex-col space-y-3" key={item.id}>
                  {item.col.map((x) => {
                    return (
                      <a
                        className="hover:scale-105 duration-200 ease-in-out cursor-pointer hover:text-green-400"
                        key={x.id}
                      >
                        {x.name}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
