import React from "react";

const Tabs = () => {
  return (
    <div>
      <ul className="flex flex-col lg:flex-row justify-center  text-[#222] text-base lg:text-xl font-medium ">
        <li className="border-b-2 border-blue-600 px-6 py-3 w-[280px] text-center  text-[#002A53] font-league-spartan text-xlfont-semibold leading-[150%] cursor-pointer">Title Search</li>
        <li className="px-6 py-3 w-[280px] text-center text-[#737373] font-league-spartan text-base font-semibold leading-[150%]  cursor-pointer">
          Document Retrieval
        </li>
        <li className=" px-6 py-3 w-[280px] text-center  text-[#737373] font-league-spartan text-base font-semibold leading-[150%]  cursor-pointer">
          Tax Certification
        </li>
        <li className="px-6 py-3 w-[280px] text-center  text-[#737373] font-league-spartan text-base font-semibold leading-[150%]  cursor-pointer">
          Commitment Report
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
