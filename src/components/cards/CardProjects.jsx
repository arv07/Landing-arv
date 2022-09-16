import React from "react";

export const CardProjects = ({title, description, capture, developed_in, preview_link, github}) => {

    console.log(developed_in);

    developed_in.map(item => {console.log(item);})

  return (

    <div className="flex flex-col lg:flex-row bg-yellow-primary w-full  h-auto rounded-xl">
    <img
      src={capture}
      className="h-96 w-11/12 lg:w-3/4 my-5 mx-5 object-cover rounded-md"
      alt=""
    />

    <div className="flex flex-col w-full lg:w-3/4 bg-black-primary rounded-r-lg">
      <p className="text-3xl text-white-primary text-center mt-6">{title}</p>
      <p className="text-gray-primary px-10 mt-10 text-justify ">
        {description}
      </p>
      <p className="text-gray-primary font-fw-medium px-10 mt-5 text-justify ">
        Desarrollado en:
      </p>
      <ul className="flex flex-row mx-auto w-full list-none list-outside">
        {developed_in.map((item,index) => (
          <li key={index} className="bg-yellow-primary w-24 text-black-secundary text-center rounded-lg py-1 mt-3 mx-auto">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center content-center mt-8 mx-16 gap-5 mb-5">
        <button className="w-6/12 py-2 bg-yellow-primary rounded-lg">
          Vista Previa
        </button>
        <button className="w-6/12 py-2 bg-yellow-primary rounded-lg">
          Git Hub
        </button>
      </div>
    </div>
  </div>
  );
};
