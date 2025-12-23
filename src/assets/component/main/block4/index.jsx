import React from 'react'
import men from '../../photo/men.png'

const Block4 = () => {
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
          <div className="bg-[#EFEFEF] rounded-[20px] w-[607px] h-[410px] p-10">
            <h3 className="text-[24px] font-semibold text-black mb-[30px] leading-snug">
              Have any questions? Fill out the form, and our specialist
              will get in touch with you shortly
            </h3>
            <div className="flex flex-col gap-[25px]">
              <input type="text" placeholder="Your name" className="bg-transparent border-b border-gray-400 outline-none py-2"/>
              <input type="email" placeholder="Your email" className="bg-transparent border-b border-gray-400 outline-none py-2" />
              <input type="tel" placeholder="Phone number" className="bg-transparent border-b border-gray-400 outline-none py-2"/>
              <button className="hover:bg-[#d99f4f] hover:scale-105 bg-[#F2B766] text-black rounded-[20px] py-3 font-medium mt-2.5 w-[306px] h-[51px] self-center text-[16px]"> Leave a request </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Block4;