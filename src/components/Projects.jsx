import React from 'react';
import ProjectsIcon from '../assets/img/projects-icon.png';
import TrelloIcon from '../assets/img/trello-icon.png';


export const Projects = () => {
  return (
    <>
      <section className="mt-10 mx-10 my-28">
        <div className="flex flex-row">
          <img src={ProjectsIcon} className="mr-4" alt="Icon Studies" />
          <p className="font-fw-medium text-black-secundary text-5xl">
            Experiencia
          </p>
        </div>

        <div className="grid gap-4 ml-6 mt-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          
        <div className="bg-yellow-primary w-80 h-72 flex flex-col rounded-xl">
          <p className="text-3xl text-black-secundary text-center mt-6">
           Clone de Trello
          </p>
          <div className="flex flex-row justify-center w-auto h-auto my-auto mx-10">
            <img src={TrelloIcon} className="h-20 m-1" alt="" />
            <p>
                Desarrollado con HTML, CSS y Javascript
            </p>
          </div>
        </div>

          
        </div>

        <span className="border-b mx-16 flex text-black-secundary mt-10"></span>
      </section>
    </>
  )
}
