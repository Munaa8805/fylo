import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Header = () => {
  const [darkSwitch, setDarkSwitch] = useState(false);
  const [dark, setDark] = React.useState(false);
  const headerdata = [
    { id: 1, name: "Features", icon: "#features" },
    { id: 2, name: "Testimonials", icon: "#testimonials" },
  ];
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="container mx-auto px-6 text-center h-40 md:h-20">
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
      <div>
        <ul className="flex item-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
          {headerdata &&
            headerdata.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.icon} className="hover:text-accentBlue">
                    {item.name}
                  </a>
                </li>
              );
            })}
          <li>
            <button onClick={() => darkModeHandler()}>
              {dark && <IoSunny />}
              {!dark && <IoMoon />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
