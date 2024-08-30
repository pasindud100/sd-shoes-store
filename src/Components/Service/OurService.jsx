import React from "react";
// import BooksStack from "../../assets/website/books-stack.png";
import shoeStore from "../../assets/shoes/shoeStore.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const OurService = () => {
  return (
    <>
      <div className="min-h-[550px]  bg-gray-200  dark:bg-gray-800 dark:text-white duration-200">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-4 sm:py-0 ">
          <div data-aos="slide-up" className="container ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
              {/* Image section */}
              <div>
                <img
                  src={shoeStore}
                  alt="biryani img"
                  className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center items-center sm:items-start gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Our Services</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5 text-justify">
                  Discover a wide range of shoes for every occasion. From
                  elegant heels to sporty sneakers, our collection is designed
                  to keep you in step with the latest trends. Experience
                  quality, comfort, and fashion all in one place.
                  <br />
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <GrSecure className="h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Quality Shoes</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFood className=" h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Fast Delivery</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className=" h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>Easy Payment method</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className=" h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Get Offers on Shoes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
