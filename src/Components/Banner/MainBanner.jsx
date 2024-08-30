import React from "react";
import dicountBanner from "../../assets/website/discountBanner.png";

const bannerImg = {
  backgroundImage: `url(${dicountBanner})`,
  backgroundPosition: "left",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%", // Ensure the image spans the full width of the container
};

function MainBanner() {
  return (
    <>
      <div
        className="min-h-[250px]  sm:min-h-[320px]  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bannerImg}
      >
        <div className="container mx-auto"></div>
      </div>
    </>
  );
}

export default MainBanner;
