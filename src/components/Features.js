import React from "react";
import im1 from "../assets/icon-access-anywhere.svg";
import im2 from "../assets/icon-security.svg";
import im3 from "../assets/icon-collaboration.svg";
import im4 from "../assets/icon-any-file.svg";
import Feature from "./Feature";

const Features = () => {
  const data = [
    {
      id: 1,
      name: [
        {
          id: 1,
          name: "Access your file from anywhere",
          desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
          image: im1,
        },
        {
          id: 2,
          name: "Security you cant trust",
          desc: "  2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
          image: im2,
        },
      ],
    },

    {
      id: 2,
      name: [
        {
          id: 3,
          name: "Access your file from anywhere",
          desc: "  2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
          image: im3,
        },
        {
          id: 4,
          name: "Access your file from anywhere",
          desc: "  2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
          image: im4,
        },
      ],
    },
  ];
  return (
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        {data.map((item) => {
          return <Feature item={item.name} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Features;
