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
import Logo from "../assets/img/logo.png";
import MoonIcon from "../assets/img/moon-yellow-1.png";
import SunIcon from "../assets/img/sun-yellow-icon.png";
import * as Scroll from "react-scroll";

export const Header = ({ changeMode, nightMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 w-full bg-black-secundary flex flex-row justify-between">
      <div className="flex">
        <img src={Logo} className="h-16" alt="Logo" />
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

      <div className="flex items-center">
        <Link to="profile" offset={-100} smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">Perfil</p>
        </Link>

        <Link to="studies" smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">Estudios</p>
        </Link>

        <Link to="skills" offset={-70} smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">Habilidades</p>
        </Link>

        <Link to="experience"   smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">Experiencia</p>
        </Link>
        <Link to="projects" smooth={true} duration={900} spy={true}>
          <p className="font-fw-light text-white-primary px-3 hover:text-yellow-primary cursor-pointer">Proyectos</p>
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
