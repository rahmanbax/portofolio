import React from "react";

const ButtonPrimary = ({img, label}) => {
  return (
    <button className="">
      <a className="flex bg-primary lg:hover:bg-[#71B52D] hover:drop-shadow-regular h-[52px] lg:h-[57px] w-max text-black items-center px-4 lg:px-6 py-5 rounded-lg transition ease-out">
        <img src={img} className="h-5 lg:h-6"/>
        <p className="ml-2 font-semibold text-base lg:text-xl">{label}</p>
      </a>
    </button>
  );
};

export default ButtonPrimary;
