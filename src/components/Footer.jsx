import React from "react";
import TwitterIcon from '../assets/img/twitter-icon.png';
import LinkedInIcon from '../assets/img/linkedin-icon.png';

export const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-6 bg-black-secundary w-full h-24">
            <img src={TwitterIcon} className='w-20 h-20' alt="twitter Icon" />
            <img src={LinkedInIcon} className='w-20 h-20' alt="LinkedIn Icon" />
      </div>
    </>
  );
};
