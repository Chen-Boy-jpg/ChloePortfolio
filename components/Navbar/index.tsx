import React, { useState, useEffect } from "react";
import style from "../../styles/home.module.css";
import Logo from "../../public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const { WORK } = process.env;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById("target-section");
      if (targetSection) {
        const { top, bottom } = targetSection.getBoundingClientRect();
        const isIntersecting = top <= 0 && bottom >= 0;
        setIsScrolled(isIntersecting);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={style.navbar}>
      <ul>
        <div className={style.logo}>
          <a href=".">
            <Image src={Logo} alt="logo"></Image>
          </a>
        </div>
        <div
          className={
            isScrolled ? style.navbar_group : style.navbar_group_colored
          }
        >
          <Link href={"/"}>
            <li>Home </li>
          </Link>
          <a href={WORK}>
            <li>Work</li>
          </a>

          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </div>

        <label
          className={
            isScrolled ? style.hamburger_menu : style.hamburger_menu_colored
          }
        >
          <input type="checkbox" name="" id="" />
          <aside className={style.sidebar}>
            <nav>
              <a href="">
                <div>Home</div>
              </a>
              <a href="">
                <div>Works</div>
              </a>
              <a href="">
                <div>About</div>
              </a>
            </nav>
          </aside>
        </label>
      </ul>
    </div>
  );
};

export default Navbar;
