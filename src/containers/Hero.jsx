import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import gmail from "../assets/gmail.svg";
import whatsapp from "../assets/whatsapp.svg";

const Hero = () => {
  return (
    <div className="mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
      <div>
        <div>
          <div>
            <h1 className="text-xl lg:text-[28px] drop-shadow-secondary">
              Hi, i am{" "}
              <span className="font-semibold text-primary ">rahmanbax</span>
            </h1>
          </div>
          <h2 className="font-semibold drop-shadow-secondary text-4xl lg:text-5xl leading-[49px] mt-2">
            Future UI/UX Designer and Front-End Developer
          </h2>
        </div>
        <p className="mt-4 text-xl lg:text-[28px] drop-shadow-secondary text-[#C6C6C6]">
          I design clean, beautiful, user friendly and codeable interfaces
        </p>
      </div>
      <div className="flex mt-8 gap-2 lg:gap-4">
        <ButtonPrimary img={gmail} label="Email me" href="https://www.w3schools.com"/>
        <ButtonSecondary className="text-white" img={whatsapp} />
      </div>
    </div>
  );
};

export default Hero;
