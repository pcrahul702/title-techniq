import React from "react";
import Accourdian from "./Accourdian";

const Faq = () => {
  return (
    <div id="faq">
      
        <div className="container px-5 mt-10 mx-auto">
          <div className="flex flex-col lg:max-w-[768px] md:max-w-[520px] mx-auto gap-4">
            <div className="text-gray-700 text-center font-league-spartan text-xl font-semibold leading-[150%] tracking-wide">
              FAQ'S
            </div>
            <div className="text-black text-center font-league-spartan text-[36px] font-semibold leading-[150%]">
              Got Questions? We Have Answers!
            </div>
            <div className="text-gray-700 text-center font-league-spartan text-base font-normal leading-[150%]">
              Our experienced team combines cutting-edge technology with
              meticulous attention to detail, providing you with comprehensive
              title search services that are efficient, reliable, and tailored
              to your specific needs.
            </div>
          </div>
          <div className="xl:max-w-[1120px] lg:max-w-[1080px] md:max-w-[680px] mx-auto mt-12">
          <Accourdian />
          </div>
        </div>
      
    </div>
  );
};

export default Faq;
