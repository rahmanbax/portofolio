import React from "react";
import Testimonial from "../components/Testimonial";
import faiz from "../assets/faiz.jpg"
import nadhif from "../assets/nadhif.jpg"

const WhatThey = () => {
  return (
    <div className="mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
      <h2 className="font-semibold text-xl lg:text-[28px]">What they say</h2>
      <div className="mt-6 lg:mt-12 flex flex-col lg:flex-row gap-4 lg:gap-8">
        <Testimonial img={faiz} say="anjayani" name="Sianjg" job="Tukang ngocok" />
        <Testimonial img={nadhif} say="yo... angkasa" name="Sijmbt" job="Citer gt" />
      </div>
    </div>
  );
};

export default WhatThey;
