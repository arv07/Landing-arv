import React from "react";
import ContactMeIcon from "../assets/img/email-icon.png";

export const ContactMe = () => {
  return (
    <>
      <section className="mx-5 sm:mx-20 md:mx-32 xl:mx-48 mt-14">
        <div className="flex flex-row">
          <img src={ContactMeIcon} className="mr-4" alt="Icon Studies" />
          <p className="font-fw-medium text-black-secundary text-4xl">
            Contáctame
          </p>
        </div>

        <div className="flex flex-col  items-center  w-full">

          <form action="" className="flex flex-col w-full sm:w-11/12 md:w-11/12 lg:w-3/5 xl:w-3/5 mt-10">
            <input 
                type="text" 
                name="" id="" 
                placeholder="Nombre" 
                className="my-1 border rounded-lg py-2 pl-3 "
            />
            <input 
                type="email" 
                name="" 
                id="" 
                placeholder="Email" 
                className="my-4 border rounded-lg py-2 pl-3"
            />
            <textarea
              name="description"
              id=""
              cols=""
              rows="5"
              
              className="w-full border-2"
            />
            <button type="submit" className="bg-yellow-primary w-70 text-center py-4 rounded-lg mt-5">Enviar</button>
          </form>
        </div>

        <span className="border-b w-full flex text-black-secundary mt-10"></span>
      </section>
    </>
  );
};
