import React from "react";
import aqua from "../assets/aqua.jpg"

const Testimonial = () => {
  return (
    <div className="w-full mt-6 lg:mt-12 flex flex-col xl:flex-row gap-4 lg:gap-6 xl:gap-8 bg-[#1B1B1B] overflow-hidden rounded-3xl">
      <div className="flex h-[280px]">
        <img src={aqua} className="w-[280px] hidden lg:block" />
        <div className="flex flex-col justify-between p-8">
          <p className="text-xl">Makasih a, hatur nuhun</p>
          <div className="">
            <h4 className="font-semibold text-xl">Bang Kipli</h4>
            <p className="text-base text-[#C6C6C6]">Kang galon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
