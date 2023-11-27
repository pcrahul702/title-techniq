import React from "react";
import Image from "next/image";

import Tabs from "./Tabs";
const Gallery = ({label,text,img1,img2,img3,other,otherlabel,tabs,setTabs}:any) => {
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
      <div className="flex justify-center gap-6 ">
        <div className=" grid grid-rows-2 ">
          <div>
            <Image src={img1} />
          </div>
          <div>
            <Image src={img2} />
          </div>
        </div>
        <div>
          <Image className=" rounded-lg" src={img3}  />
        </div>
      </div>
      <div className="text-2xl font-normal leading-[150%] text-[#404040] self-stretch">
        <div >{otherlabel}</div>
        <div className="mx-3">
          <ul className="list-disc">
           {
            other?.map((item:any,index:any)=>{
            return <li key={index}>{item}</li>
            })
           }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
