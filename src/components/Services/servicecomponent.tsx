import React from "react";
import Image from "next/image";
import image1 from "../../assets/images/imageg.png";
import image2 from "../../assets/images/imagegallry2.png";
import image3 from "../../assets/images/imageg3.png";
import Tabs from "./Tabs";
const Gallery = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-10 mt-12 mb-20">
      <Tabs />
      <div className=" align-middle ">
        <h1 className="text-[40px] text-[#262626] font-semibold mb-3 leading-[150%] ">
          Title Search
        </h1>
        <p className="text-[#262626] text-2xl font-normal leading-[150%] self-stretch ">
          A Title Search for a residential mortgage in the United States is a
          critical step in the home-buying process. A Property Ownership Search
          is the hallmark of meticulous property investigation. It uncovers the
          current property owner, backed by the vesting instrument (Deeds etc.).
          A comprehensive approach delves into public records to unveil open
          mortgages and associated documents, as well as any other records that
          cast light on the property. An exhaustive search for liens/judgments
          will be done on all owners in the chain of title.
        </p>
      </div>
      <div className="flex justify-center gap-6 ">
        <div className=" grid grid-rows-2 ">
          <div>
            <Image src={image1} />
          </div>
          <div>
            <Image src={image2} />
          </div>
        </div>
        <div>
          <Image className=" rounded-lg" src={image3} alt="" />
        </div>
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
        <div >Search types we conduct:</div>
        <div className="mx-3">
          <ul className="list-disc">
            <li>Current Owner Search </li>
            <li>Two Owner Search </li>
            <li>Full Search (as per State Statute)</li>
            <li>
              5 years / 10 years / 20 years / 40 years / 50 years / 60 years
              Chain of Title Report
            </li>
            <li>Legal & Vesting Report</li>
            <li>Legal & Vesting with Mortgage / DOT Report</li>
            <li>Open Mortgage / DOT Search</li>
            <li>Assignment Search</li>
            <li>Foreclosure Search</li>
            <li>REO SEARCH</li>
            <li>Update / Bringdown Search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
