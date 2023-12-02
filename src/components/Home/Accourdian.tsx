import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Dropup from "../../assets/Icon/dropup.svg"
import Image from "next/image";
import Dropdown from "../../assets/Icon/dropdown.svg"
function Accourdian() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);

  return (
    <div className="flex flex-col gap-10 text-csBlue text-xs md:text-base lg:text-xs 2xl:text-base scroll-smooth">
      <div className={`${one ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              01
            </span>
            Are you Insured?
          </span>
          <span className="cursor-pointer" onClick={() => setOne(!one)}>
            {one ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {one && <div className="border border-csSkyBlue "></div>} */}
        {one && <div className="px-10 py-3 text-xl">YES, we carry E&O.</div>}
      </div>
      <div className={`${two ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              02
            </span>
            Number of States we cover?
          </span>
          <span className="cursor-pointer" onClick={() => setTwo(!two)}>
            {two ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {two && <div className="border border-csSkyBlue "></div>} */}
        {two && <div className="px-10 py-3 text-xl">We cover 38 States.</div>}
      </div>
      <div className={`${three ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              03
            </span>
            What sets us apart?
          </span>
          <span className="cursor-pointer" onClick={() => setThree(!three)}>
            {three ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {three && <div className="border border-csSkyBlue "></div>} */}
        {three && (
          <div className="px-10 py-3 text-xl">
            Revolutionizing Title Searches Nationwide with Our Unparalleled
            Network of On-Site Abstractors!
          </div>
        )}
      </div>
      <div className={`${four ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              04
            </span>
            What is your response time for service requests?
          </span>
          <span className="cursor-pointer" onClick={() => setFour(!four)}>
            {four ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {four && <div className="border border-csSkyBlue "></div>} */}
        {four && (
          <div className="px-10 py-3 text-xl">Our average response time is 2 hours.</div>
        )}
      </div>
      <div className={`${five ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              05
            </span>
            Can you accommodate special requests or specific preferences?
          </span>
          <span className="cursor-pointer" onClick={() => setFive(!five)}>
            {five ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {five && <div className="border border-csSkyBlue "></div>} */}
        {five && <div className="px-10 py-3">Absolutely!</div>}
      </div>
      <div className={`${six ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              06
            </span>
            Can you accommodate special requests or specific preferences?
          </span>
          <span className="cursor-pointer" onClick={() => setSix(!six)}>
            {six ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {six && <div className="border border-csSkyBlue "></div>} */}
        {six && (
          <div className="px-10 py-3 text-xl">
           Your Title Search, Your way! Precision and Reliability is Our way!
          </div>
        )}
      </div>
      <div className={`${seven ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              07
            </span>
            How do I track the progress of my service request?
          </span>
          <span className="cursor-pointer" onClick={() => setSeven(!seven)}>
            {seven ?<Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {seven && <div className="border border-csSkyBlue "></div>} */}
        {seven && (
          <div className="px-10 py-3 text-xl">
           We update each order status before you ask.
          </div>
        )}
      </div>
      <div className={`${eight ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              08
            </span>
            What is the typical lead time for scheduling services?
          </span>
          <span className="cursor-pointer" onClick={() => setEight(!eight)}>
            {eight ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {eight && <div className="border border-csSkyBlue "></div>} */}
        {eight && (
          <div className="px-10 py-3 text-xl">
         We provide order acceptance confirmation within 1 hour and convey ETA within 4 hours of assignment.
          </div>
        )}
      </div>
      <div className={`${nine ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              09
            </span>
            How do I request an estimate or quote for your services?
          </span>
          <span className="cursor-pointer" onClick={() => setNine(!nine)}>
            {nine ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {nine && <div className="border border-csSkyBlue "></div>} */}
        {nine && (
          <div className="px-10 py-3 text-xl">
          We can be reached at orders@titletechniq.com
          </div>
        )}
      </div>
      <div className={`${ten ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              10
            </span>
            Would you like to know more about how we work?
          </span>
          <span className="cursor-pointer" onClick={() => setTen(!ten)}>
            {ten ? <Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {ten && <div className="border border-csSkyBlue "></div>} */}
        {ten && (
          <div className="px-10 py-3 text-xl">
           YES ( Schedule a Call )
          </div>
        )}
      </div>
      <div className={`${eleven ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              11
            </span>
            Are you local Abstractor and wish to join our Network?
          </span>
          <span className="cursor-pointer" onClick={() => setEleven(!eleven)}>
            {eleven ?<Image src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <Image src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {eleven && <div className="border border-csSkyBlue "></div>} */}
        {eleven && (
          <div className="px-10 py-3 text-xl">
          Please fill this form and we will reach out to you.
          </div>
        )}
      </div>
    </div>
  );
}

export default Accourdian;
