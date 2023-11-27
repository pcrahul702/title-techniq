import React from "react";
import Image from "next/image";
import Test1 from "../../assets/images/test1.png";
import Slider from "react-slick";

const index = () => {
  const data = [
    {
      name: "hello",
      test1: Test1,
      reviw: "eretrrtyr",
    },
    {
      name: "hello dfsfg",
      test1: Test1,
      reviw: "eretrrtyr",
    },
    {
      name: "hello dfh",
      test1: Test1,
      reviw: "eretrrtyr",
    },
    {
      name: "hello ooofg",
      test1: Test1,
      reviw: "eretrrtyr",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: (
      <div className="prev_arrow">
        <ArrowLeft />
      </div>
    ),
    nextArrow: (
      <div className="prev_arrow">
        <ArrowRight />
      </div>
    ),
  };
  return (
    <div className="w-full m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <div className="p-6 bg-[#EDF6FF] rounded-lg  xl:max-w-[548px] ">
                <div className="text-gray-700 font-league-spartan text-xl font-normal leading-[150%]">
                  “Our skilled team conducts efficient title searches in real
                  estate transactions, safeguarding you from in-house
                  challenges. Our tailored approach reduces overhead, lowering
                  operational costs.”
                </div>
                <div className="mt-8 flex gap-4">
                  <Image src={Test1} width={64} height={64} />
                  <div
                    className="
             flex items-center gap-2"
                  >
                    <span>Johs Brolins .</span>
                    <span>Monster Company</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
const ArrowLeft = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1127_1311)">
          <path
            d="M20 0.84375C8.9543 0.84375 0 9.79805 0 20.8437C0 31.8894 8.9543 40.8437 20 40.8438C31.0457 40.8438 40 31.8894 40 20.8438C40 9.79805 31.0457 0.84375 20 0.84375Z"
            fill="#2C7ECE"
          />
          <mask
            id="mask0_1127_1311"
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="24"
            height="25"
          >
            <path d="M8 32.8418H32V8.8418L8 8.8418L8 32.8418Z" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1127_1311)">
            <path
              d="M15.8219 19.8396H26.9969C27.2802 19.8396 27.5177 19.9355 27.7094 20.1271C27.9011 20.3188 27.9969 20.5563 27.9969 20.8396C27.9969 21.123 27.9011 21.3605 27.7094 21.5521C27.5177 21.7438 27.2802 21.8396 26.9969 21.8396H15.8219L20.7219 26.7396C20.9219 26.9396 21.0177 27.173 21.0094 27.4396C21.0011 27.7063 20.8969 27.9396 20.6969 28.1396C20.4969 28.323 20.2636 28.4188 19.9969 28.4271C19.7302 28.4355 19.4969 28.3396 19.2969 28.1396L12.6969 21.5396C12.5969 21.4396 12.5261 21.3313 12.4844 21.2146C12.4427 21.098 12.4219 20.973 12.4219 20.8396C12.4219 20.7063 12.4427 20.5813 12.4844 20.4646C12.5261 20.348 12.5969 20.2396 12.6969 20.1396L19.2969 13.5396C19.4802 13.3563 19.7094 13.2646 19.9844 13.2646C20.2594 13.2646 20.4969 13.3563 20.6969 13.5396C20.8969 13.7396 20.9969 13.9771 20.9969 14.2521C20.9969 14.5271 20.8969 14.7646 20.6969 14.9646L15.8219 19.8396Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1127_1311">
            <rect width="40" height="41" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const ArrowRight = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1127_1318)">
          <path
            d="M20 40.8438C31.0457 40.8438 40 31.8894 40 20.8438C40 9.79805 31.0457 0.84375 20 0.84375C8.9543 0.84375 0 9.79805 0 20.8438C0 31.8894 8.9543 40.8438 20 40.8438Z"
            fill="#003F7C"
          />
          <mask
            id="mask0_1127_1318"
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="24"
            height="25"
          >
            <path d="M32 8.84375H8V32.8438H32V8.84375Z" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1127_1318)">
            <path
              d="M24.175 21.8439H13C12.7167 21.8439 12.4792 21.748 12.2875 21.5564C12.0958 21.3647 12 21.1272 12 20.8439C12 20.5605 12.0958 20.323 12.2875 20.1314C12.4792 19.9397 12.7167 19.8439 13 19.8439H24.175L19.275 14.9439C19.075 14.7439 18.9792 14.5105 18.9875 14.2439C18.9958 13.9772 19.1 13.7439 19.3 13.5439C19.5 13.3605 19.7333 13.2647 20 13.2564C20.2667 13.248 20.5 13.3439 20.7 13.5439L27.3 20.1439C27.4 20.2439 27.4708 20.3522 27.5125 20.4689C27.5542 20.5855 27.575 20.7105 27.575 20.8439C27.575 20.9772 27.5542 21.1022 27.5125 21.2189C27.4708 21.3355 27.4 21.4439 27.3 21.5439L20.7 28.1439C20.5167 28.3272 20.2875 28.4189 20.0125 28.4189C19.7375 28.4189 19.5 28.3272 19.3 28.1439C19.1 27.9439 19 27.7064 19 27.4314C19 27.1564 19.1 26.9189 19.3 26.7189L24.175 21.8439Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1127_1318">
            <rect width="40" height="41" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default index;
