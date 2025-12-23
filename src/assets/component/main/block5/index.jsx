import React, { useState } from "react";

const reviews = [
  {
    name: "Kenneth",
    date: "2025-07-16",
    text: "Thank you DreamHouse for helping me buy a house! Everything went quickly and without any hassle.",
  },
  {
    name: "Sarah",
    date: "2025-06-02",
    text: "Amazing service and friendly agents. They helped me find the perfect home.",
  },
  {
    name: "Michael",
    date: "2025-05-19",
    text: "Professional team with great attention to detail. Highly recommended!",
  },
  {
    name: "Emily",
    date: "2025-04-11",
    text: "Everything was smooth and transparent. Great experience!",
  },
  {
    name: "Maria",
    date: "2025-03-28",
    text: "DreamHouse exceeded my expectations. Will use again.",
  },
];

const CARD_WIDTH = 450;

const Block5 = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="w-full bg-[#171B1B] text-white py-20 flex justify-center">
      <div className="w-[1320px]">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-[64px] font-semibold"> Customer reviews </h2>
          <div className="flex flex-col items-end gap-10 w-[586px]">
          <p className="text-gray-400 text-[24px]">
          Our clients share their experiences working with us. <br />
          We're proud to help people find homes they want <br />
          to return to.
          </p>          
              <div className="flex gap-[35px]">
              <button onClick={prev} className="w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center transition hover:bg-[#d99f4f] hover:scale-110"> ← </button>
              <button onClick={next} className="w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center transition hover:bg-[#d99f4f] hover:scale-110"> → </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-[30px] transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className=" bg-white text-black rounded-[20px] p-[30px] w-[420px] shrink-0 ">
                <div className="flex items-center gap-[15px] mb-3">
                  <div className="w-[49px] h-[49px] rounded-full bg-[#D9D9D9]" />
                  <div>
                    <p className="font-semibold text-[20px]">{review.name}</p>
                    <p className="text-[16px] opacity-70">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3 text-[#F2B766]"> ★ ★ ★ ★ ★ </div>
                <p className="text-[20px] opacity-70 leading-relaxed"> {review.text} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 w-full h-1 bg-gray-600 rounded-full overflow-hidden">
          <div className="h-full bg-[#F2B766] transition-all duration-500" style={{width: `${100 / reviews.length}%`, transform: `translateX(${index * 100}%)`, }} />
        </div>
      </div>
    </div>
  );
};

export default Block5;