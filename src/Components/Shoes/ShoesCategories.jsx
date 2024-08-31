import React from "react";
import men5 from "../../assets/shoes/men5.jpg";
import men2 from "../../assets/shoes/men2.jpg";
import men3 from "../../assets/shoes/men3.jpg";
import men4 from "../../assets/shoes/men4.jpg";
import { FaStar, FaHeart } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: men5,
    title: "Men's Classic",
    category: "Men",
    price: "4750 LKR",
  },
  {
    id: 2,
    img: men2,
    title: "Leather shoe",
    category: "Men",
    price: "3500 LKR",
  },
  {
    id: 3,
    img: men3,
    title: "Leather shoe",
    category: "Men",
    price: "3200 LKR",
  },
  {
    id: 4,
    img: men4,
    title: "Leather shoe",
    category: "Men",
    price: "2900 LKR",
  },
];

const ShoesCategories = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="h-[120px] bg-slate-300 text-black  text-center  dark:bg-gray-950 dark:text-white">
        <p className="text-3xl sm:text-4xl font-bold  text-center">category</p>
        <div className="flex justify-around mt-[15px]">
          <button className="bg-red-500 hover:scale-105 duration-100 text-white py-2 px-[25px] rounded-sm  hover:bg-red-900 hover:text-black">
            Kids
          </button>
          <button className="bg-red-500 hover:scale-105 duration-100 text-white py-2 px-[25px] rounded-sm group-hover:bg-white group-hover:text-primary">
            Men
          </button>
          <button className="bg-red-500 hover:scale-105 duration-100 text-white py-2 px-[25px] rounded-sm  group-hover:bg-white group-hover:text-primary">
            Women
          </button>
        </div>
      </div>
      <div className="mt-[30px] mb-[30px]">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-[40px]  sm:mb-12 max-w-[600px] mx-auto">
            <h1 className="text-3xl font-bold">All Shoes</h1>
            <p className="text-xs text-gray-400">
              Discover the best shoes in Sri Lanka, handpicked for quality and
              style.
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-[25px] place-items-center">
              {booksData.map(({ id, img, title, category, price }) => (
                <div
                  key={id}
                  className="mt-8 sm:mt-[60px] rounded-2xl h-[250px] w-[200px] bg-white mb-10 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[100px]">
                    <img
                      src={img}
                      alt={title}
                      className="max-w-[200px] h-[150px] mx-auto transform -translate-y-14
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
                    <h1 className="text-xl font-bold">{title}</h1>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm">{category}</p>
                      <p className="text-sm">{price}</p>
                      <FaHeart className="text-red-500 cursor-pointer" />
                    </div>
                    <button
                      className="bg-primary hover:scale-105 duration-100 text-white py-1 px-4 rounded-full mt-[20px] group-hover:bg-white group-hover:text-primary"
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
      </div>
    </>
  );
};

export default ShoesCategories;
