import React from "react";
import Marquee from "react-fast-marquee";
import star from "../assets/star.svg";

const Marqueetext = () => {
  return (
    <div className="w-full overflow-hidden bg-primary drop-shadow-regular py-4 lg:py-6 mt-20 lg:mt-40">
      <Marquee speed={50} gradient={false}>
        <ul className="w-full flex items-center gap-8 lg:gap-12 xl:gap-16 px-8 text-black font-semibold text-xl lg:text-[28px] overflow-y-hidden">
          <li>User Interface</li>
          <li>
            <img src={star} />
          </li>
          <li>User Experience</li>
          <li>
            <img src={star} />
          </li>
          <li>Website Design</li>
          <li>
            <img src={star} />
          </li>
          <li>Mobile App Design</li>
          <li>
            <img src={star} />
          </li>
          <li>HTML</li>
          <li>
            <img src={star} />
          </li>
          <li>CSS</li>
          <li>
            <img src={star} />
          </li>
        </ul>
      </Marquee>
    </div>
  );
};

export default Marqueetext;
