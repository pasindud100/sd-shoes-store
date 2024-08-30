import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";

const Menu = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Products", link: "products" },
  { id: 3, name: "Services", link: "services" },
  { id: 4, name: "About", link: "about" },
  { id: 5, name: "Contact", link: "contact" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              Shoes Palace
            </a>
          </div>
          <div className="flex items-center gap-4">
            <DarkMode />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary sm:hidden"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            {/* Expanded Menu for Large Screens */}
            <ul className="hidden sm:flex sm:items-center sm:gap-4 w-full sm:w-auto bg-white dark:bg-gray-900 z-10">
              {Menu.map((menu) => (
                <li
                  key={menu.id}
                  className="sm:border-none border-b sm:border-b-0"
                >
                  <Link
                    to={menu.link}
                    smooth={true}
                    duration={500}
                    className="block sm:inline-block py-4 px-6 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Order Button for Large Screens */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full items-center gap-3 hidden sm:flex"
            >
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      {/* Expanded Menu for Small Screens */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden absolute top-[60px] left-0 w-full bg-white dark:bg-gray-900 z-10 border-t border-gray-200 dark:border-gray-700`}
      >
        {Menu.map((menu) => (
          <li key={menu.id} className="border-b">
            <Link
              to={menu.link}
              smooth={true}
              duration={500}
              className="block py-4 px-6 hover:text-primary duration-200"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
