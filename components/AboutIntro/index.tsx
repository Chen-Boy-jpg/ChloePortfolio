import React from "react";
import Intro from "../Intro";
import style from "../../styles/aboutIntro.module.css";
import Arrow from "../Arrow_2";

const { CV_LINK, BEHANCE_LINK, INSTAGRAM_LINK } = process.env;

const AboutIntro = () => {
  return (
    <div className={style.intro}>
      <div className={style.intro_title}>
        <div className={style.intro_title_word}>ABOUT</div>
        <div className={style.arrow_desktop}>
          <div className={style.intro_arrow_group}>
            <Arrow label={"Open CV"} link={CV_LINK} />
            <Arrow label={"Behance"} link={BEHANCE_LINK} />
            <Arrow label={"Instagram"} link={INSTAGRAM_LINK} />
          </div>
        </div>
      </div>
      <Intro />
      <div className={style.arrow_phone}>
        <div className={style.intro_arrow_group}>
          <Arrow label={"Open CV"} link={CV_LINK} />
          <Arrow label={"Behance"} link={BEHANCE_LINK} />
          <Arrow label={"Instagram"} link={INSTAGRAM_LINK} />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
