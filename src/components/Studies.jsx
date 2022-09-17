import React from "react";
import StudiesIcon from "../assets/img/studies-icon.png";
import { studiesData } from "../data/StudiesData";


export const Studies = ({ nightMode }) => {
  

  return (
    <section className="mt-10 mx-5 sm:mx-20 md:mx-32 xl:mx-48 py-10 sm:py-14 md:py-20">
      <div className="flex flex-row">
        <img src={StudiesIcon} className="mr-4" alt="Icon Studies" />
        <p
          className={`font-fw-medium text-black-secundary text-4xl ${
            nightMode == true ? "text-white-primary" : ""
          }`}
        >
          Estudios
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 mt-6">
        {studiesData.formal_studies.map((studies) => (
          <div key={studies.id}>
            <p
              className={`font-fw-regular text-2xl mt-5 text-black-secundary ${
                nightMode == true ? "text-white-primary" : ""
              }`}
            >
              {studies.title}
            </p>
            <p className="font-fw-light text-gray-primary text-lg mt-2">
              {studies.place}
            </p>
            <p className="text-yellow-primary text-xl mt-2 bg-black-secundary rounded-md w-20 text-center">
              {studies.year}
            </p>
          </div>
        ))}
      </div>

      <p className={`font-fw-medium text-3xl text-black-secundary mt-10 ${
                nightMode == true ? "text-white-primary" : ""
              }`}>
        Cursos
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 mt-2">
        {studiesData.courses.map((courses) => (
          <div key={courses.id}>
            <p
              className={`font-fw-regular text-2xl mt-5 text-black-secundary ${
                nightMode == true ? "text-white-primary" : ""
              }`}
            >
              {courses.title}
            </p>
            <p className="font-fw-light text-gray-primary text-lg mt-2">
              {courses.place}
            </p>
            <p className="text-yellow-primary text-xl mt-2  bg-black-secundary rounded-md w-20 text-center">{courses.year}</p>
          </div>
        ))}
      </div>

      <span className="border-b w-full flex text-black-secundary mt-10 "></span>
    </section>
  );
};
