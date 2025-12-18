import React from "react";

const HeaderComponent = () => {
  return (
    <header className="w-full h-[108px] bg-[#171B1B] px-[130px] flex items-center">
      <div className="w-full flex items-center justify-between">
        <div className="text-white text-[30px] font-semibold">DreamHouse</div>
        <div className="bg-white rounded-full h-[52px] w-[553px] flex items-center justify-center gap-[49px] text-[#171B1B]">
          <button className="px-4 py-2 rounded-full bg-[#E6E6E6]"> Home </button>
          <button className="px-4 py-2"> Catalog </button>
          <button className="px-4 py-2"> About Us </button>
          <button className="px-4 py-2"> Contact </button>
        </div>

        <div className="flex items-center gap-10">
          <div className="text-white text-[18px]">Sign up</div>
          <button className="bg-[#F2B766] h-[47px] w-[183px] rounded-full text-[#171B1B] text-[16px]">Contact us</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;