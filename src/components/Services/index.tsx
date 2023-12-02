import React, { useState,useEffect } from "react";
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
import image1 from "../../assets/images/simg1.png";
import image2 from "../../assets/images/simg2.png";
import image3 from "../../assets/images/simg3.png";
import image4 from "../../assets/images/simg4.png";
import image5 from "../../assets/images/simg5.png";
import image6 from "../../assets/images/simg6.png";
import image7 from "../../assets/images/simg7.png";
import image8 from "../../assets/images/simg8.png";
import image9 from "../../assets/images/simg9.png";
import image10 from "../../assets/images/c1.png";
import image11 from "../../assets/images/c2.png";
import { document, taxttime, titlesearch } from "src/utilities/constants";
import Comiitment from "./Comiitment";
import { useRouter } from 'next/router';
const index = () => {
  const router = useRouter();
  const param = router.query.tabs;
  console.log(param)
  const [tabs, setTabs] = useState<any>(param);
  useEffect(() => {
    // Check if the query parameter is present before updating state
    if (param !== undefined) {
      setTabs(param);
    }
  }, [param]);
  return (
    <div>
      <Header />
      <Breadcrumb />
      <Banner />
      {tabs == "1" && (
        <Gallery
          img1={image1}
          other={titlesearch}
          img2={image2}
          img3={image3}
          label="Title Search"
          text="A Title Search for a residential mortgage in the United States is a critical step in the home-buying process. A Property Ownership Search is the hallmark of meticulous property investigation. It uncovers the current property owner, backed by the vesting instrument (Deeds etc.). A comprehensive approach delves into public records to unveil open mortgages and associated documents, as well as any other records that cast light on the property. An exhaustive search for liens/judgments will be done on all owners in the chain of title."
          otherlabel="Search types we conduct:"
          tabs={tabs}
          setTabs={setTabs}
        />
      )}
      {tabs == "2" && (
        <Gallery
          img1={image4}
          other={document}
          img2={image5}
          img3={image6}
          label="Document Retrieval"
       text="We take pride in our unrivalled network of on-site Abstractors who are true masters of document retrieval. No matter how historical the document, we have the expertise and connections to get it for you."
          otherlabel="We can procure documents that are public and related to a residential property transaction, below are a few examples."
          tabs={tabs}
          setTabs={setTabs}
        />
      )}
      {tabs == "3" && (
        <Gallery
          img1={image7}
          other={taxttime}
          img2={image8}
          img3={image9}
          label="Tax Certification"
          text="Comprehensive tax reports combining essential assessor, tax agency and tax bill data that is validated for tax currency and data integrity, supported by the strongest network of regional specialists in the industry."
          otherlabel=""
          tabs={tabs}
          setTabs={setTabs}
        />
      )}
      {tabs == "4" && (
        <Comiitment
          other={taxttime}
          img1={image10}
          img2={image11}
          label="Commitment Report"
          text="A Commitment Report, in the context of a Residential Title search, is a crucial document provided by a title company or a title insurance provider. This report is a preliminary commitment to issue a title insurance policy, once specific conditions are met. It plays a vital role in the process of closing a real estate transaction. Here's what a Commitment Report typically includes:"
          otherlabel=""
          tabs={tabs}
          setTabs={setTabs}
        />
      )}

      {/* <Service /> */}
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
