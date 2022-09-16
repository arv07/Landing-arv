import React from "react";
import ProjectsIcon from "../assets/img/projects-icon.png";
import TrelloIcon from "../assets/img/trello-icon.png";

export const Projects = () => {
  return (
    <>
      <section className="mt-10 mx-5 sm:mx-20 md:mx-32 xl:mx-48 py-10 sm:py-14 md:py-20">
        <div className="flex flex-row">
          <img src={ProjectsIcon} className="mr-4" alt="Icon Studies" />
          <p className="font-fw-medium text-black-secundary text-4xl">
            Proyectos
          </p>
        </div>

        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <div className="bg-yellow-primary w-80 h-72 flex flex-col rounded-xl">
            <p className="text-3xl text-black-secundary text-center mt-6">
              Clone de Trello
            </p>
            <p className="text-black-secundary px-10 text-center mt-3">
              Desarrollado con HTML, CSS y Javascript
            </p>

            <img
              src={TrelloIcon}
              className="h-auto w-9/12 m-1 mx-auto"
              alt=""
            />
          </div>

          
            <div className="bg-yellow-primary w-80 h-72 flex flex-col rounded-xl">
              <p className="text-3xl text-black-secundary text-center mt-6">
                API Super Heroes
              </p>
              <p className="text-black-secundary px-10 text-center mt-3">
                Desarrollado con ReactJS y Axios
              </p>

              <img
                src={TrelloIcon}
                className="h-auto w-9/12 m-1 mx-auto"
                alt=""
              />
            </div>

       
        </div>

        <span className="border-b w-full flex text-black-secundary mt-10"></span>
      </section>
    </>
  );
};
