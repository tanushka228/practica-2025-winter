import React from 'react'
import photo from '../../photo/photo.png'

const Block1 = () => {
  return (
    <div className="w-full bg-[#171B1B] flex justify-center py-20">
      <div className="w-[1200px] flex items-center justify-between gap-11">

        <div className="w-[50%] text-white">
          <h1 className="text-[64px] font-bold leading-[70px]">
            Find your <br />
            dream home <br />
            with <br />
            <span className="text-[#F2B766]">DreamHouse</span>
          </h1>

          <p className="mt-6 text-[18px] text-[#E3E3E3] opacity-70 leading-7">
            Buying, renting and selling real estate across the
            country. We help you find verified properties in
            any region and guide you through every step from
            choosing a home to completing the deal.
          </p>

          <button className="hover:bg-[#d99f4f] hover:scale-105 mt-10 px-10 py-4 bg-[#F2B766] h-16 w-[223px] text-[#171B1B] font-medium rounded-full text-[16px]">Start Searching </button>
        </div>
        
        <div className="w-[50%] flex justify-end">
          <img src={photo} alt="house" className="w-[640px] h-[534px] object-cover rounded-[20px]"/>
        </div>
      </div>
    </div>
  )
}

export default Block1;