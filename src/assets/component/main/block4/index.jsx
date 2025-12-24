import React, { useState } from 'react';
import men from '../../photo/men.png';

const Block4 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false, phone: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const newErrors = {
      name: !name,
      email: !email,
      phone: !phone
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setErrors({ name: false, email: false, phone: false });
    }, 10000);
  };

  return (
    <div className="w-full flex justify-center bg-[#E3E3E3] py-20">
      <div className="w-[1320px] h-[486px] bg-[#171B1B] rounded-3xl flex items-center px-[60px]">
        <div className="flex items-center gap-10 w-1/2">
          <img src={men} alt="agent" className="h-[596px] w-[398px] ml-[-50px] mt-[-110px] object-contain"/>
          <div className="text-white max-w-[320px] ml-[-120px] mt-[-100px]">
            <h3 className="text-[32px] font-semibold leading-tight"> Dmitry Sokolov </h3>
            <p className="text-white text-[16px] ml-12"> real estate agent </p>
            <p className="text-[#E3E3E3] opacity-70 text-[14px] leading-relaxed bg-black/50 backdrop-blur-[20px] rounded-xl px-3 py-2 mt-5 -ml-5  w-[292px] h-[119px]">
              {`He helps clients buy, sell, or rent
              apartments profitably. He is known
              for his professionalism, attention to
              detail, and ability to find the best
              options for each client.`}
            </p>
          </div>
        </div>

        <div className="w-1/2 flex justify-end">
          <div className="bg-[#EFEFEF] rounded-[20px] w-[607px] h-[410px] p-10 flex flex-col items-center justify-center">
            {!submitted ? (
              <>
                <h3 className="text-[24px] font-semibold text-black mb-[30px] leading-snug">
                  Have any questions? Fill out the form, and our specialist
                  will get in touch with you shortly
                </h3>
                <div className="flex flex-col gap-[25px] w-full">
                  <input type="text"placeholder={errors.name ? "Please enter your name" : "Your name"} className={`bg-transparent border-b outline-none py-2 ${errors.name ? "border-red-500" : "border-gray-400"}`} value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: false })) }} />
                  <input type="email" placeholder={errors.email ? "Please enter your email" : "Your email"} className={`bg-transparent border-b outline-none py-2 ${errors.email ? "border-red-500" : "border-gray-400"}`} value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: false })) }} />
                  <input type="tel" placeholder={errors.phone ? "Please enter your phone" : "Phone number"} className={`bg-transparent border-b outline-none py-2 ${errors.phone ? "border-red-500" : "border-gray-400"}`} value={phone} onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: false })) }} />
                  <button className="hover:bg-[#d99f4f] hover:scale-105 bg-[#F2B766] text-black rounded-[20px] py-3 font-medium mt-2.5 w-[306px] h-[51px] self-center text-[16px]" onClick={handleSubmit} >
                    Leave a request
                  </button>
                </div>
              </>
            ) : (
             <div className="text-center w-[500px] h-[400px] flex items-center justify-center rounded-[5px] text-[18px] px-3 py-2">
              {`Thank you for your request! Our specialist will contact you
               within 10-15 minutes.`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;