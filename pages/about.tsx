import AboutContact from "@/components/AboutContact";
import AboutExp from "@/components/AboutExp";
import AboutIntro from "@/components/AboutIntro";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AosOptions } from "aos";

const about = () => {
  useEffect(() => {
    const aosConfig: AosOptions = {
      duration: 800,
      easing: "ease-out",
      once: true,
    };
    AOS.init(aosConfig);
  }, []);
  return (
    <div className="container target-section" id="container">
      <AboutIntro />
      <AboutExp />
      <AboutContact />
    </div>
  );
};
export default about;
