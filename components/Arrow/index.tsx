import React from "react";
import style from "../../styles/home.module.css";
import Image from "next/image";
import ArrowBlack from "../../public/assets/Arrow-black.png";
import Link from "next/link";
const Arrow = () => {
  return (
    <div className={style.about_content_arrow} data-aos="fade-up">
      <Link href={"/about"}>
        <div className={style.arrow_group}>
          <div>About Me</div>
          <div className={style.arrow}>
            <Image src={ArrowBlack} alt="arrow-black"></Image>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Arrow;
