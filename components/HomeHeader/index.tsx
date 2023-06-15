import React, { useEffect, useState } from "react";
import style from "../../styles/home.module.css";
import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import ForwardBtn from "../../public/assets/Forward-btn.png";

const HomeHeader = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { innerHeight, innerWidth } = window;
    const maxOffset = 50;
    const easingFactor = 0.1;

    const targetX = ((clientX / innerWidth) * 2 - 1) * maxOffset;
    const targetY = ((clientY / innerHeight) * 2 - 1) * maxOffset;

    setPositionX((prevX) => prevX + (targetX - prevX) * easingFactor);
    setPositionY((prevY) => prevY + (targetY - prevY) * easingFactor);
  };
  const backgroundStyle = {
    backgroundPosition: `${50 + positionX}% ${50 + positionY}%`,
    transition: "background-position 0.3s ease-out",
  };

  return (
    <div
      id="target-section"
      className={style.header}
      onMouseMove={handleMouseMove}
      style={backgroundStyle}
    >
      <div className={style.banner}>
        <div
          className={style.banner_title_parent}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className={style.banner_title}>Hello, I’m YuXuan Lu.</div>
        </div>
        <div
          className={style.detail_parent}
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className={style.detail_title}>
            <div className={style.detail_title_top}>
              <div>
                FEATURE&nbsp;&nbsp;UIUX&nbsp;&nbsp;.&nbsp;&nbsp;Graphic&nbsp;&nbsp;Design&nbsp;&nbsp;.&nbsp;&nbsp;3D
              </div>
            </div>
            <div>FROM 2020 TO 2023</div>
          </div>
        </div>
        <a href="">
          <div className={style.forward_btn}>
            <Image src={ForwardBtn} alt="forward-btn"></Image>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomeHeader;
