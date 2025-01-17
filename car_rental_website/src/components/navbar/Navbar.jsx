import React from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

const Navbar = ({theme,setTheme}) => {
  const Navlinks = [
    {
      id: 1,
      name: "HOME",
      link: "#/",
    },
    {
      id: 2,
      name: "CARS",
      link: "#/",
    },
    {
      id: 3,
      name: "ABOUT",
      link: "#/",
    },
    {
      id: 4,
      name: "BOOKING",
      link: "#/",
    },
  ];
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container md:py-0">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-serif font-bold">
            <h1 className="text-3xl font-serif font-bold">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-8 items-center">
              {Navlinks.map((data) => (
                <li className="py-4" key={data.id}>
                  <a
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {
              theme === "dark"?
              (<AiOutlineSun className="text-2xl hover:cursor-pointer" onClick={() => setTheme("light")}/>):
              (<AiOutlineMoon className="text-2xl hover:cursor-pointer" onClick={() => setTheme("dark")}/>)
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
