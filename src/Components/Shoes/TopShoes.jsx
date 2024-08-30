import React from "react";
import kids1 from "../../assets/shoes/kids1.jpeg";
import men1 from "../../assets/shoes/men1.png";
import women1 from "../../assets/shoes/women1.png";
import { FaStar, FaHeart } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: kids1,
    title: "Kids' Comfort",
    category: "Kids",
    price: 3500,
  },
  {
    id: 2,
    img: men1,
    title: "Men's Classic",
    category: "Men",
    price: 7500,
  },
  {
    id: 3,
    img: women1,
    title: "Women's Eleg",
    category: "Women",
    price: 6800,
  },
];

const TopShoes = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div data-aos="zoom-in" className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary">
              Best
            </p>
            <h1 className="text-3xl font-bold">Trending Shoes</h1>
            <p className="text-sm text-gray-400">
              "Discover the latest styles of footwear that everyone in Sri Lanka
              is talking about. Elevate your look with our fresh, must-have
              shoes!"
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className=" rounded-2xl bg-white mb-4 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group h-[250px] w-[200px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="max-w-[150px] mx-auto transform -translate-y-14
                    group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium">
                      {service.category}
                    </span>
                    <span className="text-sm font-bold">{`LKR ${service.price.toLocaleString()}`}</span>
                    <FaHeart className="text-red-500 cursor-pointer" />
                  </div>
                  <button
                    className="bg-primary hover:scale-105 duration-100 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[15px]">
            <button className="bg-primary hover:scale-105 duration-100 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
              See more...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopShoes;
