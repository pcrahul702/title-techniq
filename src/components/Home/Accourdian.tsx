import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function Accourdian() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);

  return (
    <div className="flex flex-col gap-10 text-csBlue text-xs md:text-base lg:text-xs 2xl:text-base scroll-smooth">
      <div
        className={`${
          one ? "" : ""
        }  rounded-lg `}
      >
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]"><span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">01</span>Can you accommodate special requests or specific preferences?</span>
          <span className="cursor-pointer" onClick={() => setOne(!one)}>
            {one ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </div>
        {one && <div className="border border-csSkyBlue "></div>}
        {one && (
          <div className="px-5 py-3">
            Dynamic discounting: Early payment for suppliers, varying discounts
            based on timing, benefits buyers and suppliers alike.
          </div>
        )}
      </div>
      <div
        className={`${
          two ? "" : ""
        }  rounded-lg `}
      >
        <div className="flex justify-between px-5 py-3">
        <span className="font-bold  text-2xl text-[#262626] leading-[150%]"><span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">02</span>Can you accommodate special requests or specific preferences?</span>
          <span className="cursor-pointer" onClick={() => setTwo(!two)}>
            {two ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </div>
        {two && <div className="border border-csSkyBlue "></div>}
        {two && (
          <div className="px-5 py-3">
            Dynamic discounting: Early payment for suppliers, varying discounts
            based on timing, benefits buyers and suppliers alike.
          </div>
        )}
      </div>
      <div
        className={`${
          three ? "" : ""
        }  rounded-lg `}
      >
        <div className="flex justify-between px-5 py-3">
        <span className="font-bold  text-2xl text-[#262626] leading-[150%]"><span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">03</span>Can you accommodate special requests or specific preferences?</span>
          <span className="cursor-pointer" onClick={() => setThree(!three)}>
            {three ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </div>
        {three && <div className="border border-csSkyBlue "></div>}
        {three && (
          <div className="px-5 py-3">
            Dynamic discounting: Early payment for suppliers, varying discounts
            based on timing, benefits buyers and suppliers alike.
          </div>
        )}
      </div>
      <div
        className={`${
          four ? "" : ""
        }  rounded-lg `}
      >
        <div className="flex justify-between px-5 py-3">
        <span className="font-bold  text-2xl text-[#262626] leading-[150%]"><span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">04</span>Can you accommodate special requests or specific preferences?</span>
          <span className="cursor-pointer" onClick={() => setFour(!four)}>
            {four ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </div>
        {four && <div className="border border-csSkyBlue "></div>}
        {four && (
          <div className="px-5 py-3">
            Dynamic discounting: Early payment for suppliers, varying discounts
            based on timing, benefits buyers and suppliers alike.
          </div>
        )}
      </div>
      <div
        className={`${
          five ? "" : ""
        }  rounded-lg `}
      >
        <div className="flex justify-between px-5 py-3">
        <span className="font-bold  text-2xl text-[#262626] leading-[150%]"><span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">05</span>Can you accommodate special requests or specific preferences?</span>
          <span className="cursor-pointer" onClick={() => setFive(!five)}>
            {five ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </div>
        {five && <div className="border border-csSkyBlue "></div>}
        {five && (
          <div className="px-5 py-3">
            Dynamic discounting: Early payment for suppliers, varying discounts
            based on timing, benefits buyers and suppliers alike.
          </div>
        )}
      </div>
      <div
        className={`${
          six ? "" : ""
        }  rounded-lg `}
      >
        <div className="flex justify-between px-5 py-3">
        <span className="font-bold  text-2xl text-[#262626] leading-[150%]"><span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">06</span>Can you accommodate special requests or specific preferences?</span>
          <span className="cursor-pointer" onClick={() => setSix(!six)}>
            {six ? <AiOutlineUp /> : <AiOutlineDown />}
          </span>
        </div>
        {six && <div className="border border-csSkyBlue "></div>}
        {six && (
          <div className="px-5 py-3">
            Dynamic discounting: Early payment for suppliers, varying discounts
            based on timing, benefits buyers and suppliers alike.
          </div>
        )}
      </div>
    </div>
  );
}

export default Accourdian;
