import React from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ProjectsIcon from "../assets/img/projects-icon.png";
import TrelloIcon from "../assets/img/trello-icon2.png";

import { projectsData } from "../database/ProjectsData";
import { CardProjects } from "../components/cards/CardProjects";

export const Projects = ({nightMode}) => {
  //console.log(projectsData[0].title);

  return (
    <>
    <Element name="projects"></Element>
      <section className="mx-5 sm:mx-20 md:mx-32 xl:mx-48 mt-14">
        <div className="flex flex-row">
          <img src={ProjectsIcon} className="mr-4" alt="Icon Studies" />
          <p className={`font-fw-medium  text-4xl ${
            nightMode == true ? "text-white-primary" : "text-black-secundary"
          }`}>
            Proyectos
          </p>
        </div>

        <div className="grid gap-4 mt-10 grid-cols-1 justify-items-center w-full">
          {projectsData.map((project) => (
            <CardProjects
              key={project.id}
              title={project.title}
              description={project.description}
              capture={project.capture}
              developed_in={project.developed_in}
              github={project.github}
              preview_link={project.preview_link}
            />
          ))}
        </div>

        <span className="border-b w-full flex text-black-secundary mt-10"></span>
      </section>
    </>
  );
};
