import React, { useEffect } from "react";
import carPng from "../../assets/car.png";
import yellowCarPng from "../../assets/banner-car.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = ({ theme }) => {
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
    <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
      <div className="container min-h-[100vh] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCarPng}
              alt=""
              className="relative -z-10  max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p data-aos="fade-up" className="text-primary font-serif text-2xl">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-[19px]">
              Discover seamless cars with affordable rates, exceptional customer
              service, and a diverse fleet of vehicles tailored for your
              journeys, adventures, and everyday travel needs.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="btn bg-primary text-black px-6 py-3 rounded-md font-semibold hover:bg-primary/75 duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
