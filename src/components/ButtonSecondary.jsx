import React from "react";

const ButtonSecondary = ({img, link}) => {
  return (
    <button className="">
      <a className="flex border-2 border-[#436B1B] hover:bg-[#436B1B] hover:drop-shadow-regular h-[52px] lg:h-[57px] text-primary items-center px-4 py-5 rounded-lg transition ease-out" href={link}>
        <img src={img} className="h-5 lg:h-6"/>
      </a>
    </button>
  );
};

export default ButtonSecondary;
