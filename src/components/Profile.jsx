import React from "react";
import ProfilePicture from "../assets/img/profile-picture.jpg";
import { useState } from "react";

export const Profile = () => {
  const [nightMode, setNightMode] = useState(false);

  const changeMode = () => {
    /*console.log('mensaje');
    const list = document.getElementById("profile").classList
    list.add("bg-black-primary")*/

    if (nightMode == false) {
      setNightMode(true);
    } else if (nightMode == true) {
      setNightMode(false);
    }
  };

  return (
    <>
      <section
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  justify-center items-center content-center h-auto my-40 mx-auto w-full sm:w-10/12 lg:w-9/12 ${
          nightMode == true ? "bg-black-primary mt-96" : ""
        }`}
      >
        <div className="w-auto mx-auto">
          <img
            src={ProfilePicture}
            className="rounded-lg mx-auto w-10/12 xl:w-11/12"
            alt=""
          />
          <button onClick={changeMode} className="bg-yellow-primary">
            Click me
          </button>
        </div>

        <div className="flex flex-col w-full justify-center pl-10 pr-10 mx-auto">
          <p className="font-fw-medium text-black-secundary text-5xl mt-10 sm:mt-10  lg:mt-1">
            Andres Rico
          </p>
          <p className="font-fw-regular text-yellow-primary text-2xl mt-2">
            Frontend Developer
          </p>
          <p className="font-fw-regular text-black-secundary text-lg mt-5 pr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            pellentesque eu tincidunt tortor. Sit amet dictum sit amet.
          </p>
        </div>
      </section>
      <span className="border-b w-9/12 flex text-black-secundary mt-10 mx-auto"></span>
    </>
  );
};
