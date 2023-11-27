import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Breadcrumb = () => {
  const router = useRouter();
  return (
    <div className="w-3/4 my-2 mx-auto">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li
            className="inline-flex items-center cursor-pointer text-base text-gray-400 font-normal"
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-[#404040] mx-1 font-thin"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-base font-medium md:ms-2">
                Service
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
