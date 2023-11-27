import React from "react";

const Tabs = ({tabs,setTabs}:any) => {
  const handlechange=(data:string)=>{
    setTabs(data)
  }
  return (
    <div>
      <ul className="flex flex-col lg:flex-row justify-center  text-[#222] text-base lg:text-xl font-medium ">
        <li onClick={()=>{handlechange("1")}} className={`${(tabs=="1")?"border-b-2 border-blue-600":""} px-6 py-3 w-[280px] text-center  text-[#002A53] font-league-spartan text-xlfont-semibold leading-[150%] cursor-pointer`}>Title Search</li>
        <li onClick={()=>{handlechange("2")}}  className={`${(tabs=="2")?"border-b-2 border-blue-600":""} px-6 py-3 w-[280px] text-center  text-[#002A53] font-league-spartan text-xlfont-semibold leading-[150%] cursor-pointer`}>
          Document Retrieval
        </li>
        <li onClick={()=>{handlechange("3")}}  className={`${(tabs=="3") ?"border-b-2 border-blue-600":""} px-6 py-3 w-[280px] text-center  text-[#002A53] font-league-spartan text-xlfont-semibold leading-[150%] cursor-pointer`}>
          Tax Certification
        </li>
        <li onClick={()=>{handlechange("4")}}  className={`${(tabs=="4")?"border-b-2 border-blue-600":""} px-6 py-3 w-[280px] text-center  text-[#002A53] font-league-spartan text-xlfont-semibold leading-[150%] cursor-pointer`}>
          Commitment Report
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
