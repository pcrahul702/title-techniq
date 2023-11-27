import React from "react";
import Image from "next/image";
import SlickSlider from "../SlickSlider"


const Testimonial = () => {
  return (
    <div className=" w-3/4  mx-auto mt-20  mb-10 ">
      <div className="flex flex-col flex-grow gap-4  xl:px-40 lg:px-28 md:px-16">
        <div className="text-gray-700 font-league-spartan text-xl font-semibold leading-6 tracking-wider text-center">
          TESTIMONIALS
        </div>
        <div className="text-black text-center font-league-spartan text-[36px] font-semibold leading-[150%]">
          What Our Customers Say About Their Seamless Title Search Experience
        </div>
        <div className="text-gray-700 text-center font-league-spartan text-base font-normal leading-[150%]">
        Our team leverages cutting-edge technology to streamline the title search process. This enables us to deliver swift and accurate results, ensuring your real estate transactions proceed seamlessly. We're here to make your property journey efficient and worry-free.
        </div>
      </div>
      <SlickSlider/>
      {/* <div className="grid grid-cols-2 gap-6 mt-14 ">
      <div className="p-6 bg-[#EDF6FF] rounded-lg  xl:max-w-[548px] ">
      <div className="text-gray-700 font-league-spartan text-xl font-normal leading-[150%]">“Our skilled team conducts efficient title searches in real estate transactions, safeguarding you from in-house challenges. Our tailored approach reduces overhead, lowering operational costs.”</div>
      <div className="mt-8 flex gap-4">
      <Image src={Testi1} width={64} height={64} />
      <div className="
      flex items-center gap-2"><span>Johs Brolins .</span><span>Monster Company</span></div>
      </div>
      </div>
      <div className="p-6 bg-[#EDF6FF] rounded-lg  xl:max-w-[548px] ">
      <div className="text-gray-700 font-league-spartan text-xl font-normal leading-[150%]">“Our skilled team conducts efficient title searches in real estate transactions, safeguarding you from in-house challenges. Our tailored approach reduces overhead, lowering operational costs.”</div>
      <div className="mt-8 flex gap-4">
      <Image src={Testi1} width={64} height={64} />
      <div className="
      flex items-center gap-2"><span>Johs Brolins .</span><span>Monster Company</span></div>
      </div>
      </div>
     
      </div> */}
      
      
    </div>

    
  );
};

export default Testimonial;
