import React from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import HeroBanner from '../../assets/images/herobanner.png'
import Leftarrow from "../../assets/Icon/leftarrow.svg"
import Model from '../common/Modal'

const Index = () => {
  return (
    <div className="relative h-screen">
      <video src="/video.mp4" autoPlay loop muted className='absolute top-0 left-0 object-cover w-full h-full'/>
      
        {/* <Image src={HeroBanner}  
         className="absolute top-0 left-0 object-cover w-full h-full"
         layout="fill"
         alt="Hero Banner"/> */}
      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="text-white text-center  font-league-spartan text-[40px] font-normal  uppercase">
          So <span className='font-semibold text-5xl text-[#71B9FF]'>MUCH MORE</span> Than a <span className='font-semibold text-5xl'>residential TITLE SEARCH!</span>
        </div>
        <div className='font-normal text-[40px] text-center text-white mb-[14px]'>Experience the power of nationwide <span className='text-[32px]'>On-site</span> <div>Abstractors!</div></div>
        <p className="text-white text-center text-2xl font-normal">Your key to Seamless Residential Title Searches & Document retrievals in every County, across the US.</p>
        <div className='flex  justify-center gap-6 mt-[72px]'>
          <button className="w-[157px]  px-5 py-4 text-center  bg-blue-500 text-white  rounded-lg text-base font-semibold" >Let's Talk</button>
          <button className="w-[157px]  px-5 py-4 text-center border-white border text-white  rounded-lg text-base font-semibold mr-2">Get Started<Image src={Leftarrow} alt="Left Arrow" width={16} height={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default Index;
