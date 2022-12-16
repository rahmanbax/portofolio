import React from "react";
import outward from "../assets/outward.svg";
import buildupc from "../assets/buiildupc.jpg";
import livescore from "../assets/livescore.jpg";
import furnice from "../assets/furnice.jpg";

const Projects = () => {
  return (
    <div className="mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
      <h2 className="font-semibold text-xl lg:text-[28px] drop-shadow-secondary">
        Featured projects
      </h2>
      <div className="mt-8 lg:mt-12 flex flex-col gap-4 sm:gap-6 lg:gap-8 ">
        <div className="">
          <img
            src={buildupc}
            className="w-full h-[175px] object-cover sm:h-[291px] lg:h-[463px] xl:h-[600px] overflow-hidden rounded-xl lg:rounded-2xl drop-shadow-secondaryimg"
          />
          <div className="mt-4  sm:flex sm:gap-4 lg:gap-8">
            <div className="flex hover:underline hover:text-primary items-center">
              <p className=" mr-2 font-medium text-base lg:text-xl">
                View Case Study on Behance
              </p>
              <img src={outward} className="h-5 lg:h-6" />
            </div>
            <div className="flex hover:underline hover:text-primary items-center mt-2 sm:mt-0 lg:mt-0">
              <p className="mr-2 font-medium text-base lg:text-xl">
                View on Dribbble
              </p>
              <img src={outward} className="h-5 lg:h-6 " />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={livescore}
            className="w-full h-[175px] object-cover sm:h-[291px] lg:h-[463px] xl:h-[600px] overflow-hidden rounded-xl lg:rounded-2xl drop-shadow-secondaryimg"
          />
          <div className="mt-4 lg:flex lg:gap-8">
            <div className="flex hover:underline hover:text-primary items-center mt-2 lg:mt-0">
              <p className="mr-2 font-medium text-base lg:text-xl">
                View on Dribbble
              </p>
              <img src={outward} className="h-5 lg:h-6 " />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={furnice}
            className="w-full h-[175px] object-cover sm:h-[291px] lg:h-[463px] xl:h-[600px] overflow-hidden rounded-xl lg:rounded-2xl drop-shadow-secondaryimg"
          />
          <div className="mt-4  lg:flex lg:gap-8">
            <div className="flex hover:underline hover:text-primary items-center mt-2 lg:mt-0">
              <p className="mr-2 font-medium text-base lg:text-xl">
                View on Dribbble
              </p>
              <img src={outward} className="h-5 lg:h-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
