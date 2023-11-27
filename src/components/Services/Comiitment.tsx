import React from 'react'
import Image from "next/image";
import Tabs from "./Tabs";

 
const Comiitment = ({label,text,img1,img2,tabs,setTabs}:any) => {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-10 mt-12 mb-20">
      <Tabs setTabs={setTabs} tabs={tabs}/>
      <div className=" align-middle ">
        <h1 className="text-[40px] text-[#262626] font-semibold mb-3 leading-[150%] ">
          {label}
        </h1>
        <p className="text-[#262626] text-2xl font-normal leading-[150%] self-stretch ">
        {text}
        </p>
      </div>
      <div className="flex justify-center  ">
        <div className=" grid grid-cols-2 gap-4 ">
          <div>
            <Image src={img1} />
          </div>
          <div>
            <Image src={img2} />
          </div>
        </div>
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
      <span className='font-bold'>Property Information:</span> Details about the property being examined, including its legal description and ownership history. Title Information: Information about the current state of the property's title, including any liens, encumbrances, or restrictions that may affect the title.
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
      <span className='font-bold'>Conditions and Requirements:</span> A list of conditions that must be satisfied before the title insurance policy can be issued. This often includes the payment of outstanding debts or the resolution of title issues.
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
     <span className='font-bold'>Exceptions: Any exceptions or exclusions from coverage in the title insurance policy.</span> These are typically iteming that the policy will not cover, such as certain types of zoning restrictions or environmental issues.
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
      <span className='font-bold'>Ownership and Encumbrance Report: </span>This section provides a history of the property's ownership and any recorded documents affecting the property, such as mortgages, deeds, and easements.
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
    <span className='font-bold'>Legal Description:</span> A legal description of the property to ensure that the property boundaries are accurately identified.
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
        The Commitment Report serves as a commitment from the title company to issue a title insurance policy once all the conditions and requirements are met. It is a critical step in the real estate transaction process, as it allows the parties involved to identify and address any potential title issues before closing. It provides peace of mind to both buyers and lenders, ensuring that they will have clear and marketable title to the property.
      </div>
    </div>
  );
};

export default Comiitment;
