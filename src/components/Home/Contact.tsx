import React, { useState } from "react";
import Textarea from "../common/Input/Textarea";
import Input from "../common/Input";
import Button from "../common/Button";
import { POST } from "src/utilities/webService";
import { SEND_MAIL } from "src/utilities/APIUrls";
import { toast } from 'react-toastify';
const Contact = () => {
  const [disable,setDesable]=useState<any>(false)
  const [btntext,setbtntext]=useState<any>('Submit')
  const [formdata,setFormdata]=useState<any>({
    full_name:"",
    company_name:"",
    email:"",
    mobile:"",
    message:"",
  })
  const [errors, setErrors] = useState<any>({});
  const validateForm = () => {
    let valid = true;
    const newErrors: any = {};

    // Validate Full Name
    if (!formdata.full_name.trim()) {
      newErrors.full_name = "Full Name is required";
      valid = false;
    }
    if (!formdata.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
      valid = false;
    }
    if (!formdata.company_name.trim()) {
      newErrors.company_name = "company name is required";
      valid = false;
    }
    if (!formdata.message.trim()) {
      newErrors.message = " Message is required";
      valid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formdata.email.trim() || !emailRegex.test(formdata.email.trim())) {
      newErrors.email = "Valid Email is required";
      valid = false;
    }

    // Add more validations for other fields as needed

    setErrors(newErrors);
    return valid;
  };
  const handleform=(e:any)=>{
   const {name,value}=e.target;
   setFormdata({...formdata,[name]:value})
  }
  const handlesubmit=()=>{
   
    if (validateForm()) {
      console.log("Form submitted:", formdata);
      
        const response =POST(SEND_MAIL ,formdata).then(
          (response)=>{
           
              console.log(response)
            if (response.data.message === 'Email sent successfully') {
              setbtntext('Submited')
              setDesable(true)
              toast.success(response.data.message)
              console.log('Email sent successfully');
              setTimeout(()=>{
                setDesable(false)
                setbtntext('Submit')
              },10000)
            } else {
              setDesable(false)
              toast.error('Error sending email')
              console.error('Error sending email');
            }
          }
        ).catch((error)=>{
          setDesable(false)
          toast.error('Error sending email')
          console.error('Error sending email', error);
        })
    } else {
      console.log("Form validation failed");
      toast.error('Form Is Not valid')
    }
  }
  return (
    <div id="contact" className="bg-[#FFF3F6] py-20 xl:px-40 lg:px-28 md:px-16">
      <div className="max-w-[800px]  md:max-w-680 mx-auto  ">
        <div className="text-center text-[36px] font-semibold leading-[150%]">Let's Get in Touch</div>
        <div className="text-center text-base text-noraml text-[#4E4E4E] leading-[150%]">Speak to one of our experts today.</div>
        <div className="mt-12  grid grid-cols-2 gap-6">
          <div>
          <Input
            labelText="Full Name"
            placeHolder="Enter Here"
            className="w-full p-3"
            height="h-12"
            labelTextStyle="text-[#737373] "
            name="full_name"
            onChange={handleform}
            value={formdata?.full_name}
          />
          {errors.full_name && <div className="text-red-500">{errors.full_name}</div>}
          </div>
          <div>
          <Input
            labelText="Company Name"
            placeHolder="Enter Here"
            className="w-full p-3"
            height="h-12"
            labelTextStyle="text-[#737373] "
            name="company_name"
            onChange={handleform}
            value={formdata?.company_name}
          />
          {errors.company_name && <div className="text-red-500">{errors.company_name}</div>}
          </div>
         <div>
         <Input
            labelText="Business Email "
            placeHolder="Enter Here"
            className="w-full p-3"
            height="h-12"
            labelTextStyle="text-[#737373] "
            name="email"
            onChange={handleform}
            value={formdata?.email}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
         </div>
          <div>
          <Input
            labelText="Mobile Phone"
            placeHolder="xxx - xxx - xxxx"
            className="w-full p-3"
            height="h-12"
            labelTextStyle="text-[#737373] "
            name="mobile"
            onChange={handleform}
            value={formdata?.mobile}
          />
          {errors.mobile && <div className="text-red-500">{errors.mobile}</div>}
          </div>
        </div>
        <div className="mt-10">
          <Input
            labelText="Description"
            className="w-full p-3  "
            labelTextStyle="text-[#737373] "
            height="h-20"
            placeHolder="write Here"
            name="message"
            onChange={handleform}
            value={formdata?.message}
          />
          {errors.message && <div className="text-red-500">{errors.message}</div>}
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
          <Button  disabled={disable} className={` ${disable ? 'bg-[#003F7C] opacity-70' : 'bg-[#003F7C]'}  text-white px-8 py-4 w-[176px] rounded-lg `} onClick={handlesubmit}>
          <span className="font-semibold text-base">{btntext}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
