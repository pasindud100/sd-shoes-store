import React from "react";
import about from "../../Assets/shoes/about.jpg";
function AboutUs() {
  return (
    <div>
      <div class=" mx-auto py-[20px] px-4 sm:px-6 lg:px-8bg-gray-100 bg-slate-200 dark:bg-gray-800 dark:text-white flex justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div data-aos="fade" class="mt-42 md:mt-0">
            <img
              src={about}
              alt="About Us Image"
              class="object-cover rounded-lg shadow-md w-[500px]"
            />
          </div>
          <div data-aos="fade" class="max-w-lg">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p class="mt-4 text-gray-600 text-md text-justify my-[20px]">
              In today’s fast-paced world, convenience is key. That’s why Shoes
              Palace offers both in-store and online shopping experiences to fit
              your lifestyle. Whether you prefer to browse our latest arrivals
              in person at our Mathugama location or explore our collection
              online from the comfort of your home, we make it easy for you to
              find the perfect pair of shoes, whenever and wherever you need
              them..
            </p>
            <div class="mt-[10px]">
              <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">
                Learn more about us...
                <span class="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
