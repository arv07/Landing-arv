import React from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SkillsIcon from "../assets/img/skills-2.png";
import FrontendIcon from "../assets/img/frontend-icon.png";
import BackendIcon from "../assets/img/backend-icon.png";
import SqlIcon from "../assets/img/sql-icon2.png";

export const Skills = ({nightMode}) => {
  return (
    <>
    <Element name="skills"></Element>
    <section className="mx-5 sm:mx-20 md:mx-32 xl:mx-48 ">
      <div className="flex flex-row">
        <img src={SkillsIcon} className="mr-4" alt="Icon Studies" />
        <p className={`font-fw-medium  text-4xl ${
                nightMode == true ? "text-white-primary" : "text-black-secundary"
              }`}>
          Habilidades
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 mt-10 justify-items-center ">

        <div className={`bg-yellow-primary w-80 h-96 flex flex-col rounded-xl  ${
                nightMode == true ? "shadow-black-secundary shadow-xl" : "shadow-black shadow-xl"
              }`}>
          <div className="flex justify-center items-center w-full h-40 rounded-t-lg  bg-black-secundary">
            <img src={FrontendIcon} className="h-32 " alt="" />
          </div>
          <p className="text-3xl text-black-primary text-center mt-6">
            Frontend
          </p>
          <p className="mt-5 text-justify px-12 py-6 text-black-secundary">
            Conocimientos en HTML, CSS, Javascript y ReactJS para el diseño de
            interfaces.
          </p>
        </div>

        <div className={`bg-yellow-primary w-80 h-96 flex flex-col rounded-xl  ${
                nightMode == true ? "shadow-black-secundary shadow-xl" : "shadow-black shadow-xl"
              }`}>
          <div className="flex justify-center items-center w-full h-40 rounded-t-lg  bg-black-secundary">
            <img src={BackendIcon} className="h-32 " alt="" />
          </div>
          <p className="text-3xl text-black-primary text-center mt-6">
          Banckend
          </p>
          <p className="mt-5 text-justify px-12 py-6 text-black-secundary">
          Conocimientos básicos en PHP con el Framework Laravel, Java SE y
              Python.
          </p>
        </div>

        <div className={`bg-yellow-primary w-80 h-96 flex flex-col rounded-xl  ${
                nightMode == true ? "shadow-black-secundary shadow-xl" : "shadow-black shadow-xl"
              }`}>
          <div className="flex justify-center items-center w-full h-40 rounded-t-lg  bg-black-secundary">
            <img src={SqlIcon} className="h-32 " alt="" />
          </div>
          <p className="text-3xl text-black-primary text-center mt-6">
          Bases de Datos
          </p>
          <p className="mt-5 text-justify px-12 py-6 text-black-secundary">
          Conocimientos en base de datos, lenguaje DDL, DML con SQL Server y
              MySql.
          </p>
        </div>

      </div>

      <span className="border-b w-full flex text-black-secundary mt-10"></span>
    </section>
    </>
  );
};
