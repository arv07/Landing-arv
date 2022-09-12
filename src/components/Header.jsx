import React from "react";
import Logo from "../assets/img/logo.png";
import DarkModeSwitch from "../assets/img/moon-yellow-1.png";

export const Header = () => {
  return (
    <header className="h-14 w-full bg-black-secundary flex flex-row justify-between">
      <div className="flex">
        <img src={Logo} className="h-16" alt="Logo" />
        <img src={DarkModeSwitch} className="h-8 m-3" alt="Dark Mode" />
      </div>

      <div className="flex items-center">
        <p className="font-fw-light text-white-primary px-3">Perfil</p>
        <p className="font-fw-light text-white-primary px-3">Estudios</p>
        <p className="font-fw-light text-white-primary px-3">Skills</p>
        <p className="font-fw-light text-white-primary px-3">Experiencia</p>
        <p className="font-fw-light text-white-primary px-3">Proyectos</p>
        <p className="font-fw-light text-white-primary px-3 mr-8">Contáctame</p>
      </div>
    </header>
  );
};
