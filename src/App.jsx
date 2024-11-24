import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import OrderPopup from "./Components/OrderPopup/OrderPopup.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import FirstApper from "./Components/FirstAppear/FirstApper.jsx";
import MainBanner from "./Components/Banner/MainBanner.jsx";
import TopShoes from "./Components/Shoes/TopShoes.jsx";
import OurService from "./Components/Service/OurService.jsx";
import ShoesCategories from "./Components/Shoes/ShoesCategories.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* Add padding-top equal to the height of the navbar */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="mt-[60px]" id="home">
        <MainBanner />
        <FirstApper handleOrderPopup={handleOrderPopup} />
        <TopShoes handleOrderPopup={handleOrderPopup} />
      </div>

      <div id="products">
        <ShoesCategories handleOrderPopup={handleOrderPopup} />
      </div>
      <div id="services">
        <OurService />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="contact">
        <ContactUs />
      </div>

      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
