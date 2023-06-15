import React from "react";
import style from "../../styles/aboutExp.module.css";

const Exp = () => {
  return (
    <div className={style.exp} data-aos="fade-up">
      <div className={style.exp_title}>Experience</div>
      <div className={style.exp_group}>
        <div className={style.exp_child}>
          <div className={style.exp_date}>2022.APR - NOV</div>
          <div className={style.exp_company}>磨人設計 Polish Design</div>
          <div className={style.exp_position}>視覺實習生</div>
        </div>
        <div className={style.exp_child}>
          <div className={style.exp_date}>2022.DEC - 2023. JUN</div>
          <div className={style.exp_company}>菜蟲農食股份有限公司</div>
          <div className={style.exp_position}>UI實習生</div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className={style.work} data-aos="fade-up">
      <div className={style.work_title}>Work</div>
      <div className={style.work_detail_group}>
        <div className={style.work_detail}>2023 &nbsp;NTU Study Aboard</div>
        <div className={style.work_detail}>
          2023 &nbsp;Polish Design 2nd Anniversary Gift Pack
        </div>
        <div className={style.work_detail}>
          2022 &nbsp;台科北科大亂鬥 HDC BATTLE
        </div>
        <div className={style.work_detail}>
          2022 &nbsp;台北科技大學 HDC 期末舞展「舞可取代」 視覺統籌
        </div>
        <div className={style.work_detail}>
          2021 &nbsp;台北科技大學 HDC 期初舞展「貳拾號藝廊」 視覺統籌
        </div>
        <div className={style.work_detail}>
          2021 &nbsp;台北科技大學 HDC 迎新PARTY「日出之前 限時好友」視覺統籌
        </div>
      </div>
    </div>
  );
};

const Awards = () => {
  return (
    <div className={style.awards} data-aos="fade-up">
      <div className={style.awards_title}>Awards</div>
      <div className={style.award_group}>
        <div className={style.award_child}>
          <div className={style.award_type}>
            2023 金點新秀設計獎 數位互動設計類
          </div>
          <div className={style.award_item}>新秀設計獎</div>
        </div>
        <div className={style.award_child}>
          <div className={style.award_type}>
            2023 放視大賞 5G XR 雲應用創新競賽
          </div>
          <div className={style.award_item}>入圍決選</div>
        </div>
        <div className={style.award_child}>
          <div className={style.award_type}>
            2023 放視大賞 遊戲類/非典型遊戲組
          </div>
          <div className={style.award_item}>入圍決選</div>
        </div>
        <div className={style.award_child}>
          <div className={style.award_type}>2022 台北科技大學 紅樓獎</div>
          <div className={style.award_item}>最佳海報設計獎</div>
        </div>
        <div className={style.award_child}>
          <div className={style.award_type}>
            2021 北科宿舍自治會 繪畫比賽 「室中有畫」
          </div>
          <div className={style.award_item}>優選</div>
        </div>
        <div className={style.award_child}>
          <div className={style.award_type}>2020 全國專題競賽 平面設計組</div>
          <div className={style.award_item}>入圍複賽</div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={style.skills} data-aos="fade-up">
      <div className={style.skills_title}>Skills</div>
      <div className={style.tag_group}>
        <div className={style.tag}>PS</div>
        <div className={style.tag}>AI</div>
        <div className={style.tag}>AE</div>
        <div className={style.tag}>PR</div>
        <div className={style.tag}>ID</div>
        <div className={style.tag}>Figma</div>
        <div className={style.tag}>Blender</div>
      </div>
    </div>
  );
};

const AboutExp = () => {
  return (
    <div className={style.exp_section}>
      <Exp />
      <Work />
      <Awards />
      <Skills />
    </div>
  );
};

export default AboutExp;
