import React from "react";
import ExperienceIcon from "../assets/img/experience-icon.png";

export const Experience = () => {
  return (
    <>
      <section className="mt-10 mx-5 sm:mx-20 md:mx-32 xl:mx-48 py-10 sm:py-14 md:py-20">
        <div className="flex flex-row">
          <img src={ExperienceIcon} className="mr-4" alt="Icon Studies" />
          <p className="font-fw-medium text-black-secundary text-4xl">
            Experiencia
          </p>
        </div>

        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <div className="bg-yellow-primary w-80 h-72 flex flex-col rounded-xl">
            <div className="bg-black-secundary rounded-t-xl h-28">
              <p className="text-2xl text-white-primary text-center px-10 my-10">
                Consultor Junior Oracle EPM
              </p>
            </div>

            <div className="flex flex-row justify-center w-auto h-auto my-auto mx-10">
              <p>
                Configuración procesos ETL con Data Management y programación de
                Scripts. Implementación Planning PBCS de Oracle.
              </p>
            </div>
          </div>

          <div className="bg-yellow-primary w-80 h-72 flex flex-col rounded-xl">
            <div className="bg-black-secundary rounded-t-xl h-28">
              <p className="text-2xl text-white-primary text-center px-5 my-10">
                Prácticante Riesgos
              </p>
            </div>

            <div className="flex flex-row justify-center w-auto h-auto my-auto mx-10">
              <p>
                Apoyo en la construcción y ejecución de pruebas de los planes de
                continuidad de negocio, ante riesgos tecnológicos, documentación de
                incidentes y pruebas.
              </p>
            </div>
          </div>
        </div>

        <span className="border-b w-full flex text-black-secundary mt-10"></span>
      </section>
    </>
  );
};
