import React from "react";
import Textarea from "../common/Input/Textarea";
import Input from "../common/Input";
import Button from "../common/Button";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#FFF3F6] py-20 xl:px-40 lg:px-28 md:px-16">
      <div className="max-w-[800px]  md:max-w-680 mx-auto  ">
        <div className="text-center text-[36px] font-semibold leading-[150%]">Let's Get in Touch</div>
        <div className="text-center text-base text-noraml text-[#4E4E4E] leading-[150%]">Speak to one of our experts today.</div>
        <div className="mt-12  grid grid-cols-2 gap-6">
          <Input
            labelText="Full Name"
            placeHolder="Enter Here"
            className="w-full p-3"
            labelTextStyle="text-[#737373] "
          />
          <Input
            labelText="Company Name"
            placeHolder="Enter Here"
            className="w-full p-3"
            labelTextStyle="text-[#737373] "
          />
          <Input
            labelText="Business Email "
            placeHolder="Enter Here"
            className="w-full p-3"
            labelTextStyle="text-[#737373] "
          />
          <Input
            labelText="Mobile Phone"
            placeHolder="xxx - xxx - xxxx"
            className="w-full p-3"
            labelTextStyle="text-[#737373] "
          />
        </div>
        <div className="mt-10">
          <Textarea
            labelText="Description"
            className="w-full p-3 "
            labelTextStyle="text-[#737373] "
            cols={10}
            placeHolder="write Here"
            value=""
          />
        </div>
        <div className="mt-10 mb-14 p-4 rounded-lg border border-[#BAE6FD] bg-[#F0F9FF]">
          <div className="text-base font-normal leading-[150%] text-[#075985]">
            To place an order, ask about costs, or ask a general question, you
            can email us at inquiry@titletechniq.com. We appreciate your
            reaching out to us. Give us a chance to meet your title and
            settlement needs, we ensure to take this opportunity to greater
            lengths.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button className="bg-[#003F7C] text-white px-8 py-4 w-[176px] rounded-lg ">
          <span className="font-semibold text-base">Submit</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
