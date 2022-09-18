import React from "react";
import ProfilePicture from "../assets/img/profile-picture.jpg";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useState } from "react";

export const Profile = ({ nightMode }) => {
  return (
    <>
      <Element name="profile"></Element>
      <section
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  justify-center items-center content-center h-auto my-40 mx-auto w-full sm:w-10/12 lg:w-9/12`}
      >
        <div className="w-auto mx-auto">
          <img
            src={ProfilePicture}
            className="rounded-lg mx-auto w-10/12 xl:w-11/12"
            alt=""
          />
        </div>

        <div className="flex flex-col w-full justify-center pl-10 pr-10 mx-auto">
          <p
            className={`font-fw-medium text-black-secundary text-5xl mt-10 sm:mt-10 lg:mt-1 ${
              nightMode == true ? "text-white-primary" : ""
            }`}
          >
            Andres Rico
          </p>
          <p className="font-fw-regular text-yellow-primary text-2xl mt-2 bg-black-secundary rounded-md w-64 px-5">
            Frontend Developer
          </p>
          <p
            className={`font-fw-regular text-black-secundary text-lg mt-5 pr-20 ${
              nightMode == true ? "text-gray-primary" : ""
            }`}
          >
            Ingeniero de sistemas y estudiante en Análisis de Datos,
            con habilidades para el aprendizaje y manejo de sistemas de
            información y nuevas tecnologías, gusto por el desarrollo de
            software y el análisis de datos.
          </p>
        </div>
      </section>
      <span className="border-b w-9/12 flex text-black-secundary mt-10 mx-auto"></span>
    </>
  );
};
