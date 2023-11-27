import React from 'react'
import Brand1 from "../assets/images/brand1.png"
import Brand2 from "../assets/images/brand2.png"
import Brand3 from "../assets/images/brand3.png"
import Brand4 from "../assets/images/brand4.png"
import Image from 'next/image'
const Brand = () => {
  return (
    <div className='px-20 py-10'>
      <div className='flex justify-between'>
       <Image src={Brand1}/>
       <Image src={Brand2}/>
       <Image src={Brand3}/>
       <Image src={Brand4}/>
      </div>
    </div>
  )
}

export default Brand
