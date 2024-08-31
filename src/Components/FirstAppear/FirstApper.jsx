import React, { useEffect, useState } from "react";
import kids3 from "../../assets/shoes/kids3.png";
import men1 from "../../assets/shoes/men1.png";
import women1 from "../../assets/shoes/women1.png";

const talks = [
  {
    id: 1,
    title: "Step into Adventure",
    description:
      "Comfort meets durability in our kids' shoe collection. Perfect for little explorers, every step is an adventure.",
    img: kids3,
  },
  {
    id: 2,
    title: "Elevate Your Style",
    description:
      "Discover our men’s shoes that blend comfort, quality, and style. Perfect for every occasion, from the office to a night out.",
    img: men1,
  },
  {
    id: 3,
    title: "Elegance in Every Step",
    description:
      "Unleash your inner diva with our stunning ladies' shoe collection. Designed to make every outfit shine, from casual chic to elegant evenings.",
    img: women1,
  },
];

function FirstApper({ handleOrderPopup }) {
  const [activeTalk, setActiveTalk] = useState(0);

  const handlePrev = () => {
    setActiveTalk((activeTalk - 1 + talks.length) % talks.length);
  };

  const handleNext = () => {
    setActiveTalk((activeTalk + 1) % talks.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeTalk]);

  return (
    <div className=" bg-gray-200  flex items-center justify-center min-h-[400px]  dark:bg-gray-800 dark:text-white duration-200">
      <div className="flex flex-col md:flex-row mx-[100px] items-center sm:gap-8 justify-center w-full p-3">
        {talks.map((talk, i) => (
          <div
            className={`transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
              activeTalk === i ? "block" : "hidden"
            }`}
            key={talk.id}
          >
            <img
              src={talk.img}
              alt={talk.title}
              className="w-[250px] h-[200px] sm:w-[300px] sm:h-[260px] rounded-lg"
            />
          </div>
        ))}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          {talks.map((talk, i) => (
            <div
              className={`data-aos-once="true"
          className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
         ${activeTalk === i ? "block" : "hidden"}`}
              key={talk.id}
            >
              <h1
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              >
                {talk.title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {talk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FirstApper;
