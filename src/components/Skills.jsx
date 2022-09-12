import React from 'react';
import SkillsIcon from '../assets/img/skills-2.png';
import FrontendIcon from '../assets/img/frontend-icon.png';
import BackendIcon from '../assets/img/backend-icon.png';
import SqlIcon from '../assets/img/sql-icon.png';

export const Skills = () => {
  return (
    <section className="mt-10 mx-10 my-28">
      <div className="flex flex-row">
        <img src={SkillsIcon} className="mr-4" alt="Icon Studies" />
        <p className="font-fw-medium text-black-secundary text-5xl">Skills</p>
      </div>

      <div className="grid gap-4 ml-6 mt-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

        <div className='bg-yellow-primary w-80 h-72 flex flex-col rounded-xl'>
            <p className='text-3xl text-black-secundary text-center mt-6'>Frontend</p>
            <div className='flex flex-row justify-center w-auto h-auto my-auto mx-10'>
                <img src={FrontendIcon} className="h-24 m-1" alt="" />
                <p>Conocimientos en HTML, CSS y Javascript</p>
            </div>
        </div>
        
        <div className='bg-yellow-primary w-80 h-72 flex flex-col rounded-xl'>
            <p className='text-3xl text-black-secundary text-center mt-6'>Banckend</p>
            <div className='flex flex-row justify-center w-auto h-auto my-auto mx-10'>
                <img src={BackendIcon} className="h-20 m-1" alt="" />
                <p>Conocimientos básicos en PHP con el Framework Laravel, Java SE y Python.</p>
            </div>
        </div>

        <div className='bg-yellow-primary w-80 h-72 flex flex-col rounded-xl '>
            <p className='text-3xl text-black-secundary text-center mt-6'>Bases de Datos</p>
            <div className='flex flex-row justify-center w-auto h-auto my-auto mx-10'>
                <img src={SqlIcon} className="h-20 m-1" alt="" />
                <p>Conocimientos en base de datos, lenguaje DDL, DML con SQL Server y MySql</p>
            </div>
        </div>

       

      </div>

      <span className="border-b mx-16 flex text-black-secundary mt-10"></span>

    </section>
  )
}
