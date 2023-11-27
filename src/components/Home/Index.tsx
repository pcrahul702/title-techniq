import React from "react";
import Header from "../Header/Index";
import HeroSection from "../Hero/Index";
import Footer from "../Footer/Index";
import Brand from "../Brand";
import Service from "./Service";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import About from "./About";
const Index = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brand />
      <About />
      <Service />

      <Faq />
      <div className="w-[1100px] mx-auto my-2 px-14 text-2xl font-normal">
        <h5>Please fill this Form and we will reach out to you.</h5>
      </div>
      <Contact />
      <Testimonial />
      <div className=" p-20 ">
        <div className="flex flex-col justify-center items-center">
          <div className="self-stretch text-[#222] text-5xl font-semibold leading-[150%] text-center">
            “Far & away the best prize that life offers is the chance to work
            hard at work worth doing.”
          </div>
          <div className="text-center text-xl font-normal">- T. Roosevelt</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
