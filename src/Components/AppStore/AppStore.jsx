import React from "react";
import dicountBanner from "../../assets/website/discountBanner.png";

const bannerImg = {
  backgroundImage: `url(${dicountBanner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "300px",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={bannerImg}
      >
        <div className="container"></div>
      </div>
    </>
  );
};

export default AppStore;
