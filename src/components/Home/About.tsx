import React from 'react'
import goal from "../../assets/images/goal.png";
import serve from "../../assets/images/serve.png";
import whyus from "../../assets/images/whyus.png";
import about from "../../assets/images/about.png";
import CardwithImg from "./CardWithImg";
const About = () => {
  return (
    <div id="about">
          <div className="lg:px-[256px] pt-[80px] mb-10">
        <div className="text-[#4E4E4E]  text-xl font-normal text-center mb-4">
          ABOUT US
        </div>
        <div className="text-[#000] text-center font-league-spartan text-[36px] font-semibold leading-[150%] ">
          We uphold unwavering standards of
          <div>transparency, integrity, and personalized service.</div>
        </div>
        <div className="text-center text-base font-normal font-league-spartan  text-[#404040] mt-4 leading-[150%]">
          In the intricate world of title searches with years of industry
          expertise, we specialize in delivering meticulous and{" "}
          <div>
            efficient title search services tailored to your unique needs.
          </div>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto">
        <CardwithImg
          imgurl={goal}
          label="Our Goal"
          text="To enable a thriving network of Expert Title Abstractors across the US in facilitating real estate transactions to be processed with accurate Abstract reports, by being a trusted & reliable bridge between them. Effectively competing with the industry standard turn times in every work we do."
          className="bg-[#FFF3F6]"
          width={"w-1/3"}
        />
        <CardwithImg
          imgurl={about}
          label="About Us"
          text="A committed team collaborating with Independent Abstractors, ensuring precise Title reports with unwavering responsibility, while cutting-edge technology streamlines for unparalleled efficiency. All day long!"
          className="bg-[#EAFFFB]"
          width={"w-1/3"}
        />
        <CardwithImg
          imgurl={serve}
          label="Who We Serve"
          text="We are a well-established network of highly experienced Abstractors, proudly serving clients across 2025 counties in the United States. Our core mission is to cater to the needs of Title & Settlement Companies, Title Insurance agencies, Homeowners, and a wide range of valued partners, delivering comprehensive solutions with a commitment to excellence."
          className="bg-[#FCF5FF]"
          width={"w-1/3"}
        />
        <CardwithImg
          imgurl={whyus}
          label="Why Us"
          text="At the tech forefront, we prioritise your security, shielding data from cyber threats. Our streamlined process & cost-effective solutions enhance efficiency & reliability, ensuring your satisfaction. We build lasting client relationships with exceptional service & communication."
          className="bg-[#FFFAEA]"
          width={"w-1/3"}
        />
      </div>
    </div>
  )
}

export default About
