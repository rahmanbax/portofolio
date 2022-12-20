import React from "react";

const ButtonSecondary = (props) => {
  return (
    <button className="flex border-2 border-[#436B1B] hover:bg-[#436B1B] hover:drop-shadow-regular h-[52px] lg:h-[57px] text-primary items-center px-4 py-5 rounded-lg transition ease-out">
        <img src={props.img} className="h-5 lg:h-6"/>
    </button>
  );
};

export default ButtonSecondary;
