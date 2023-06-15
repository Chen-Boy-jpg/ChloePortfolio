import HomeHeader from "@/components/HomeHeader";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AosOptions } from "aos";
import HomeContent from "@/components/HomeContent";
import HomeAbout from "@/components/HomeAbout";

const Home = () => {
  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 800,
      easing: "ease-out",
      once: true,
    };
    AOS.init(aosConfig);
  }, []);
  return (
    <div className="container" id="container">
      <HomeHeader />
      <HomeContent />
      <HomeAbout />
    </div>
  );
};

export default Home;
