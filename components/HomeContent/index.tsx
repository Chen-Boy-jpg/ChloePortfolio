import React from "react";
import style from "../../styles/home.module.css";
import Work from "./work";
import ArrowBlack from "../../public/assets/Arrow-black.png";
import Image from "next/image";
const { BEHANCE_POLISH_LINK, NTU_LINK, BEHANCE_EXPLORER_LINK, WORK } =
  process.env;
const works = [
  {
    title: "2023 磨人設計兩週年禮品官網",
    detail: {
      title: "Polish Design 2nd Anniversary Gift Pack",
      type: "Role : PM . 3D Modeler",
    },
    contact: "Behance",
    link: BEHANCE_POLISH_LINK,
  },
  {
    title: "2023 台灣大學海外教育博覽會",
    detail: {
      title: "NTU Study Abroad EXPO",
      type: "Role : 3D Modeler . Graphic Design",
    },
    contact: "Visit Web",
    link: NTU_LINK,
  },
  {
    title: "2023 Explorer 探勘者",
    detail: {
      title: "2023 Explorer  . VR Parkour Game",
      type: "Role : Graphic Design .VFX Design",
    },
    contact: "Behance",
    link: BEHANCE_EXPLORER_LINK,
  },
];

const HomeContent = () => {
  return (
    <div className={style.content}>
      <div className={style.content_title}>
        <div className={style.content_title_top}>Work</div>
        <div className={style.content_title_bottom}>
          Take a look at my latest projects
        </div>
      </div>
      <div className={style.works}>
        <div className={style.works_line}></div>
        {works.map((work) => (
          <div>
            <Work
              title={work.title}
              detail={work.detail}
              contact={work.contact}
              link={work.link}
            />
            <div className={style.works_line}></div>
          </div>
        ))}
      </div>
      <div className={style.content_bottom}>
        <div className={style.content_bottom_group}>
          <a href={WORK}>
            <div className={style.content_bottom_label}>More Works</div>
            <div className={style.content_bottom_arrow}>
              <Image
                className={style.arrow}
                src={ArrowBlack}
                alt="arrow"
              ></Image>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
