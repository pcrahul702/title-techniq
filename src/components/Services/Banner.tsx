import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import HeroBanner from "../../assets/images/bg-2.png";
import Leftarrow from "../../assets/Icon/leftarrow.svg";
const Banner = () => {
  return (
    <div>
      <div className="relative h-[496px]  mb-12">
        <Image
          src={HeroBanner}
          className="absolute top-0 left-0 object-contain w-full "
          layout="fill"
          alt="Hero Banner"
        />
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5">
          <div className="  text-[#FAFAFA] text-center font-league-spartan text-[56px] font-normal  leading-[150%]">
            Unlock the Power of Accurate
          </div>
          <div className=" text-[#71B9FF] text-center font-league-spartan text-[64px] font-semibold  leading-[150%]">
            Title Searches
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
