import React, { useEffect, useState } from "react";
import img1 from "../assets/bg-quotes.png";

const Testimonial = () => {
  const [person, setPerson] = useState([]);
  let urlTest = "https://randomuser.me/api/?results=3";

  useEffect(() => {
    fetch(urlTest, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res", res.results);
        setPerson(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = [
    {
      id: 1,
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 2,
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 3,
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];
  let content = "";
  if (person.length > 0) {
    content = data.map((item, index) => {
      return (
        <div
          key={item.id}
          className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="text-sm leading-5 md:text-lg">{item.desc}</p>
          <div className="flex space-x-4">
            <img
              src={person[index].picture.large}
              alt="hello"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">
                {" "}
                {`${person[index].name.first} ${person[index].name.last}`}
              </p>
              <p className="text-xs font-extralight">
                {person[index].name.title}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <section id="testimonials" className="vg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            src={img1}
            alt=" "
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
          {content}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
