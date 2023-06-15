import React from "react";
import style from "../../styles/aboutContact.module.css";
const AboutContact = () => {
  return (
    <div className={style.contact} data-aos="fade-up">
      <div className={style.contact_title}>CONTACT</div>
      <div className={style.contact_info}>
        <div>Email . chloe064000@gmail.com</div>
        <div>(+886) 0988019285</div>
      </div>
    </div>
  );
};

export default AboutContact;
