import React from "react";

const Block5 = () => {
  return (
    <div className="w-full bg-[#171B1B] text-white py-20 flex justify-center">
      <div className="w-[1320px]">
        <div className="flex justify-between items-start mb-12">

          <h2 className="text-[64px] font-semibold leading-none"> Customer reviews </h2>
          <div className="flex flex-col items-end gap-10 w-[586px]">
            <p className="text-gray-400 text-[24px] leading-relaxed">
              Our clients share their experiences working with us.
              We're proud to help people find homes they want to
              return to.
            </p>

            <div className="flex gap-[35px] mr-2 mt-[5px]">
              <button className="w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center"> ← </button>
              <button className="w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center"> → </button>
            </div>
          </div>
        </div>

        {/* Карточки */}
        <div className="flex justify-between gap-[30px]">

          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white text-black rounded-[20px] p-[30px] w-[420px]">
              {/* Верх карточки */}
              <div className="flex items-center gap-[15px] mb-3">
                <div className="w-[49px] h-[49px] rounded-full bg-[#D9D9D9]" />
                <div>
                  <p className="font-semibold text-[20px]">Kenneth</p>
                  <p className="text-[16px] text-[#2C2C2C] opacity-70">2025-07-16</p>
                </div>
              </div>

              {/* Звезды */}
              <div className="flex gap-1 mb-3 text-[#F2B766]">
                ★ ★ ★ ★ ★
              </div>

              {/* Текст */}
              <p className="text-[20px] text-[#2C2C2C] opacity-70 leading-relaxed">
                Thank you DreamHouse for helping me buy a house!
                Everything went quickly and without any hassle.
                The team was always available and answered all my
                questions. I highly recommend them!
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Block5;