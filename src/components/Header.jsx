import React, { useRef } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Logo from "../assets/img/logo2.png";
import MoonIcon from "../assets/img/moon-yellow-1.png";
import SunIcon from "../assets/img/sun-yellow-icon.png";
import MenuIcon from "../assets/img/menu-icon2.png";
import * as Scroll from "react-scroll";
import { useState } from "react";

export const Header = ({ changeMode, nightMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    console.log(showMenu);
    //showMenu == false ? (setShowMenu(true)) : (showMenu(false))
    if (showMenu == false) {
      setShowMenu(true);
    } else if (showMenu == true) {
      setShowMenu(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 w-full bg-black-secundary flex flex-row justify-between">
      <div className="flex">
        <img src={Logo} className="h-16" alt="Logo" />
        <div>
          <a
            /* style="display:block" */
            href="https://fimlm.org/Campus"
            target="_blank"
            title="Campus • FIMLM"
            className="w-auto"
          >
            <img
              src={`https://images.fimlm.org/campus/Campus-FIMLM-Mini.png`}
              className="w-1/2 my-3 sm:w-32 sm:mr-5 md:w-36"
              /* style={`max-width: 100%; min-width:auto; margin: 0 auto;display: block;`} */
              alt="Campus FIMLM" 
            ></img>
          </a>
        </div>
        {nightMode == true ? (
          <img
            onClick={changeMode}
            src={SunIcon}
            className="h-8 m-3 cursor-pointer"
            alt="Dark Mode"
          />
        ) : (
          <img
            onClick={changeMode}
            src={MoonIcon}
            className="h-8 m-3 cursor-pointer"
            alt="Dark Mode"
          />
        )}
      </div>

      <div className="flex md:hidden">
        <button onClick={handleShowMenu} className="mx-2">
          <img src={MenuIcon} className="w-auto  h-full " alt="" />
        </button>
        <ul
          className={` bg-black-secundary w-52 py-5 absolute right-0 top-14 ${
            showMenu == true ? "flex flex-col" : "hidden"
          }`}
        >
          <Link
            to="profile"
            offset={-100}
            smooth={true}
            duration={900}
            spy={true}
          >
            <li
              onClick={() => setShowMenu(false)}
              className="font-fw-light text-white-primary px-5 hover:text-yellow-primary cursor-pointer mb-5 mt-4"
            >
              Perfil
            </li>
          </Link>
          <Link to="studies" smooth={true} duration={900} spy={true}>
            <li
              onClick={() => setShowMenu(false)}
              className="font-fw-light text-white-primary px-5 hover:text-yellow-primary cursor-pointer mb-5"
            >
              Estudios
            </li>
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={900}
            spy={true}
            offset={-70}
          >
            <li
              onClick={() => setShowMenu(false)}
              className="font-fw-light text-white-primary px-5 hover:text-yellow-primary cursor-pointer mb-5"
            >
              Habilidades
            </li>
          </Link>

          <Link to="experience" smooth={true} duration={900} spy={true}>
            <li
              onClick={() => setShowMenu(false)}
              className="font-fw-light text-white-primary px-5 hover:text-yellow-primary cursor-pointer mb-5"
            >
              Experiencia
            </li>
          </Link>

          <Link to="projects" smooth={true} duration={900} spy={true}>
            <li
              onClick={() => setShowMenu(false)}
              className="font-fw-light text-white-primary px-5 hover:text-yellow-primary cursor-pointer mb-5"
            >
              Proyectos
            </li>
          </Link>
          <Link to="contactme" smooth={true} duration={900} spy={true}>
            <li
              onClick={() => setShowMenu(false)}
              className="font-fw-light text-white-primary px-5 hover:text-yellow-primary cursor-pointer mb-5"
            >
              Contactame
            </li>
          </Link>
        </ul>
      </div>

      <div className="hidden md:flex items-center ">
        <Link
          to="profile"
          offset={-100}
          smooth={true}
          duration={900}
          spy={true}
        >
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">
            Perfil
          </p>
        </Link>

        <Link to="studies" smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">
            Estudios
          </p>
        </Link>

        <Link to="skills" offset={-70} smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">
            Habilidades
          </p>
        </Link>

        <Link to="experience" smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">
            Experiencia
          </p>
        </Link>
        <Link to="projects" smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">
            Proyectos
          </p>
        </Link>

        <Link to="contactme" smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 mr-8 hover:text-yellow-primary cursor-pointer">
            Contáctame
          </p>
        </Link>
      </div>
    </header>
  );
};
