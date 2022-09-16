import React from "react";
import StudiesIcon from "../assets/img/studies-icon.png";

export const Studies = () => {
  return (
    <section className="mt-10 mx-5 sm:mx-20 md:mx-32 xl:mx-48 py-10 sm:py-14 md:py-20">
      <div className="flex flex-row">
        <img src={StudiesIcon} className="mr-4" alt="Icon Studies" />
        <p className="font-fw-medium text-black-secundary text-4xl">Estudios</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 mt-6">
        
        <div>
          <p className="font-fw-regular text-2xl mt-5 text-black-secundary">Igeniería de Sistemas</p>
          <p className="font-fw-light text-gray-primary text-lg mt-2">
            Universidad Los Libertadores
          </p>
          <p className="text-yellow-primary text-xl mt-2">2019</p>
        </div>

        <div className="">
          <p className="font-fw-regular text-2xl mt-5 text-black-secundary">
            Técnico Bachiller en Sistemas
          </p>
          <p className="font-fw-light text-gray-primary text-lg mt-2">
            Colegio Juan Lozano y Lozano
          </p>
          <p className="text-yellow-primary text-xl mt-2">2011</p>
        </div>

      </div>

      <p className="font-fw-regular text-3xl text-black-secundary mt-10">Cursos</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 mt-2">
        
        <div>
          <p className="font-fw-regular text-2xl mt-5 text-black-secundary">Visualización de Datos</p>
          <p className="font-fw-light text-gray-primary text-lg mt-2">
            Platzi
          </p>
          <p className="text-yellow-primary text-xl mt-2">2021</p>
        </div>

        <div className="">
          <p className="font-fw-regular text-2xl mt-5 text-black-secundary">
            Python
          </p>
          <p className="font-fw-light text-gray-primary text-lg mt-2">
            Platzi
          </p>
          <p className="text-yellow-primary text-xl mt-2">2021</p>
        </div>

        <div className="">
          <p className="font-fw-regular text-2xl mt-5 text-black-secundary">
            Desarrollador Frontend con ReactJS
          </p>
          <p className="font-fw-light text-gray-primary text-lg mt-2">
            FIMLM
          </p>
          <p className="text-yellow-primary text-xl mt-2">2022</p>
        </div>

      </div>
      
      <span className="border-b w-full flex text-black-secundary mt-10"></span>
    </section>
    
  );
};
