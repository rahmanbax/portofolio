import React from "react";
import Testimonial from "../components/Testimonial";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import Carousel from "../components/Carousel/Carousel";

const WhatThey = () => {
  return (
    <div className="mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
      <h2 className="font-semibold text-xl lg:text-[28px]">What can i do</h2>
      <div className="">
        <Carousel />
        {/* <div className="flex gap-8 items-center">
          <button className="prevPg">
            <a className="border-2 border-[#436B1B] hover:bg-[#436B1B] hover:drop-shadow-regular h-[56px] w-[56px] text-primary items-center p-4 transition ease-out rounded-full hidden lg:flex">
              <img src={left} className="h-6" />
            </a>
          </button>
          <Testimonial />
          <button className="nextPg">
            <a className="border-2 border-[#436B1B] hover:bg-[#436B1B] hover:drop-shadow-regular h-[56px] w-[56px] text-primary items-center p-4 transition ease-out rounded-full hidden lg:flex">
              <img src={right} className="h-6" />
            </a>
          </button>
        </div> */}
        {/* pagination */}
      </div>
    </div>
  );
};

export default WhatThey;
