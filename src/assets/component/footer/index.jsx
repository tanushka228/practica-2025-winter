import React from "react";

const FooterComponent = () => {
  return (
    <div className="w-full bg-[#171B1B] text-[#E3E3E3] py-[30px]">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center px-[60px]">
        <div className="flex gap-[55px] text-[20px] ml-[-50px]">
          <p className="cursor-pointer hover:text-[#F2B766] transition">Home</p>
          <p className="cursor-pointer hover:text-[#F2B766] transition">Catalog</p>
          <p className="cursor-pointer hover:text-[#F2B766] transition">About Us</p>
          <p className="cursor-pointer hover:text-[#F2B766] transition">Contacts</p>
        </div>
        <div className="text-right mr-[-50px]">
          <p className="text-white text-[30px] font-medium">DreamHouse</p>
          <p className="text-[20px] text-[#E3E3E3] opacity-70">© 2025 DreamHouse</p>
        </div>

      </div>
    </div>
  );
};

export default FooterComponent;