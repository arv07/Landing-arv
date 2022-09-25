import React from "react";
import TwitterIcon from "../assets/img/twitter-icon2.png";
import LinkedInIcon from "../assets/img/linkedin-icon2.png";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-6 bg-black-secundary w-full h-24">
        <a href="https://twitter.com/andresrico07" target="_blank">
          <img src={TwitterIcon} className="w-20 h-20" alt="twitter Icon" />
        </a>
        <a href="https://www.linkedin.com/in/alirio-andres-rico-valderrama-a34103186/" target="_blank">
          <img src={LinkedInIcon} className="w-20 h-20" alt="LinkedIn Icon" />
        </a>
      </div>
    </>
  );
};
