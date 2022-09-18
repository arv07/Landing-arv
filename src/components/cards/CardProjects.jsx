import React from "react";
import { Link } from "react-router-dom";
import EyeIcon from '../../assets/img/eye-icon.png';
import GithubIcon from '../../assets/img/github-icon.png';

export const CardProjects = ({title, description, capture, developed_in, preview_link, github}) => {

    console.log(github);

    //developed_in.map(item => {console.log(item);})

  return (

    <div className="flex flex-col lg:flex-row bg-yellow-primary w-full  h-auto rounded-xl shadow-black shadow-xl">
    <img
      src={capture}
      className="h-96 w-11/12 lg:w-3/4 my-5 mx-5 object-cover rounded-md"
      alt=""
    />

    <div className="flex flex-col w-full lg:w-3/4 bg-black-secundary rounded-r-lg shadow-black shadow-xl">
      <p className="text-3xl text-white-primary text-center mt-6">{title}</p>
      <p className="text-gray-primary px-10 mt-10 text-justify ">
        {description}
      </p>
      <p className="text-gray-primary font-fw-medium px-10 mt-5 text-justify ">
        Desarrollado en:
      </p>
      <ul className="flex flex-row px-10 w-full h-auto list-none list-outside gap-3 ">
        {developed_in.map((item,index) => (
          <li key={index} className="bg-gray-primary w-auto text-black-primary text-center rounded-lg py-1 mt-4 px-3">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center content-center mt-8  gap-5 mb-5 mx-3">
        
        <button className="w-44 py-2 flex flex-row justify-center bg-yellow-primary rounded-lg px-3 ">
        <img src={EyeIcon} className='w-7 h-7' alt="" />  
          <span className="py-1 ml-2">Vista Previa</span> 
        </button>

        <a href={github} target="_blank">
        <button className="w-44 py-2 flex flex-row justify-center bg-yellow-primary rounded-lg px-3 ">
          <img src={GithubIcon} className='w-7 h-7' alt="" />  
            <span className="py-1 ml-2">Github</span> 
          </button>
        </a>
          
          
        
        
      </div>
    </div>
  </div>
  );
};
