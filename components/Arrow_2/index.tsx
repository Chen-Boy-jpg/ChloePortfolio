import React from "react";
import style from "../../styles/arrow.module.css";
import Image from "next/image";
import ArrowBlack from "../../public/assets/Arrow-black.png";

type ArrowProp = {
  label: string;
  link?: string;
};

const Arrow = ({ label, link }: ArrowProp) => {
  return (
    <a href={link}>
      <div className={style.arrow_group} data-aos="fade-up">
        <div>{label}</div>
        <div className={style.arrow}>
          <Image src={ArrowBlack} alt="arrow-black"></Image>
        </div>
      </div>
    </a>
  );
};

export default Arrow;
