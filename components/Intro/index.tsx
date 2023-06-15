import React from "react";
import style from "../../styles/Intro.module.css";
import Image from "next/image";
import MainPic from "../../public/assets/MainPic.png";

const Intro = () => {
  return (
    <div className={style.about_content}>
      <div
        className={style.about_content_img}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <Image src={MainPic} alt="MainPic"></Image>
      </div>
      <div
        className={style.about_content_detail}
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className={style.detail_name}>盧昱瑄 Yu Xuan Lu</div>
        <div className={style.detail_birth}>Born, 2000, Changhua.</div>
        <div className={style.detail_graduate}>Graduated from </div>{" "}
        <div className={style.highlight}>Taipei Tech . Interaction Design</div>{" "}
        in 2023.
      </div>
      <div
        className={style.about_content_describe}
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <div className={style.describe_tag}>#活潑親切 #團隊合作 #解決問題</div>
        <div className={style.describe_intro}>
          喜歡視覺設計及脈絡思考，擅長將資訊統整後藉由圖像和符號傳遞意念，設計之於我是種溝通方式，依循脈絡、了解使用者需求後執行設計，能夠獨立作業也樂於團隊合作，期望將技能和熱情帶到團隊，共同創造出優質且有意義的使用者體驗。
        </div>
      </div>
    </div>
  );
};
export default Intro;
