import React from "react";

const Testimonial = (props) => {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 bg-[#1B1B1B] rounded-2xl h-[160px] lg:h-[240px] flex flex-col justify-between">
      <p className="text-base lg:text-[20px]">{props.say}</p>
      <div className="flex gap-3 items-center">
        <img src={props.img} className="h-10 lg:h-12 rounded-full"/>
        <div>
          <h4 className="text-base font-semibold">{props.name}</h4>
          <p className="text-sm text-[#C6C6C6]">{props.job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
