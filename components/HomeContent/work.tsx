import React from "react";
import style from "../../styles/home.module.css";
import ArrowBlack from "../../public/assets/Arrow-black.png";
import Image from "next/image";
type PropType = {
  title: string;
  detail: { title: string; type: string };
  contact: string;
  link?: string;
};

export const Work = ({ title, detail, contact, link }: PropType) => {
  return (
    <div className={style.work} data-aos="fade-up">
      <div className={style.work_head}>
        <div className={style.work_head_title}>{title}</div>
        <div className={style.work_detail}>
          <div className={style.work_detail_title}>{detail.title}</div>
          <div className={style.work_detail_type}>{detail.type}</div>
        </div>
      </div>
      <div className={style.work_content}>
        <div className={style.work_contact}>
          <div className={style.content_bottom_arrow}>
            <a href={link}>
              <div>{contact}</div>

              <div className={style.arrow}>
                <Image src={ArrowBlack} alt="arrow"></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
