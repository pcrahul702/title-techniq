import React from 'react'

const Trustcard = ({svg,label,text}:any) => {
  return (
    <div className="p-7 flex flex-col gap-4 rounded-lg bg-[#EDF6FF]">
    <div className="flex gap-4 ">
      <div>
       {svg}
      </div>
      <div className="text-xl font-semibold text-[#000] flex items-center" >{label}</div>
    </div>
    <div className="text-base text-[#404040] font-normal leading-[150%]">
   {text}
    </div>
  </div>
  )
}

export default Trustcard
