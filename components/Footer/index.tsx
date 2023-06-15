import React from "react";
import style from "../../styles/footer.module.css";
import ArrowTop from "../../public/assets/ArrowTop.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={style.footer}>
      <a href="chloe064000@gmail.com">
        <div className={style.marquee_container}>
          <div className={style.marquee_text}>
            Thanks For Watching. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let’s
            Talk.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className={style.marquee_text}>
            Thanks For Watching. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let’s
            Talk.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className={style.marquee_text}>
            Thanks For Watching. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let’s
            Talk.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </a>
      <div className={style.copyright}>
        <div>@2023</div>
        <a href="#container">
          <div className={style.back}>
            <div>Back To TOP</div>
            <Image src={ArrowTop} alt="arrow"></Image>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Footer;
