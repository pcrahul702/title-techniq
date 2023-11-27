import React from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import Service from "../Home/Service";
import CardWithImg from "../Home/CardWithImg";
import Card from "./Card";
import goal from "../../assets/images/transform.png";
import Contact from "../Home/Contact";
import Testimonial from "../Home/Testimonial";
import Gallery from "./servicecomponent";
import Banner from "./Banner";
import Trust from "./Trust";
import Breadcrumb from "./Breadcrumb";
const index = () => {
  return (
    <div>
      <Header />
      <Breadcrumb/>
      <Banner />
      <Gallery />
      <Service />
      <Card
        imgurl={goal}
        label="Transform Your Business"
        text="In the managed services arena, we strive to achieve the position of being the leading and primary provider. Our service provides access to licensed Abstractors who are capable of conducting accurate and reliable Title Searches for residential properties throughout the United States. This ensures that you have all the necessary information for a successful real estate transaction."
        className="bg-[#FFF3F6] w-5/6 mx-auto"
      />
      <Trust />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default index;
