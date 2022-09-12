import React from "react";
import ProfilePicture from "../assets/img/profile-picture.png";

export const Profile = () => {
  return (
    <>
      <section className="flex justify-center w-full h-auto mt-28">
        <div className="w-2/4 ">
          <img src={ProfilePicture} className="rounded-full mx-auto" alt="" />
        </div>

        <div className="flex flex-col w-2/4 self-center pr-56">
          <p className="font-fw-medium text-black-secundary text-5xl">
            Andres Rico
          </p>
          <p className="font-fw-regular text-yellow-primary text-2xl mt-2">
            Frontend Developer
          </p>
          <p className="font-fw-regular text-black-secundary text-lg mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            pellentesque eu tincidunt tortor. Sit amet dictum sit amet.
          </p>
        </div>
      </section>
      <div></div>
      <span className="border-b border-indigo-500 h-2 mx-16 px-5 flex text-black-secundary mt-10"></span>
    </>
  );
};
