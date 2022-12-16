import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import gmail from "../assets/gmail.svg";

const Discuss = () => {
  return (
    <div className="mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40 bg-[#1B1B1B] p-4 sm:p-6 lg:p-8 rounded-2xl ">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:flex-row items-start xl:items-center space-between ">
        <h2 className="font-semibold text-xl lg:text-[28px] w-full">
          Do you have an awesome project to discuss?
        </h2>
        <ButtonPrimary img={gmail} label="Lets talk!" className=""/>
      </div>
    </div>
  );
};

export default Discuss;
