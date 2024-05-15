import React from "react";

const Feature = ({ item }) => {
  return (
    <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
      {item &&
        item.map((x) => {
          return (
            <div
              className="flex flex-col items-center mt-4 space-y-2 md:w-1/2"
              key={x.id}
              data-aos={`${x.id % 2 === 0 ? "fade-left" : "fade-right"}`}
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex items-center justify-center h-24 mb-2">
                <img src={x.image} alt={x.name} />
              </div>
              <h3 className="text-xl font-bold">{x.name}</h3>
              <p className="max-w-md">{x.desc}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Feature;
