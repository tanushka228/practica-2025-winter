import React from "react";

function HeaderComponent({ onSignUpClick, isAuth }) {
  let authElement;

  if (isAuth === false) {
    authElement = (
      <button onClick={onSignUpClick} className="text-white text-[18px] transition hover:text-[#F2B766]"> Sign up </button>
    );
  } else if (isAuth === true) {
    authElement = (
      <button className="text-white text-[18px] transition hover:text-[#F2B766]"> Profile </button>
    );
  } else {
    authElement = (
      <span className="text-red-500">Auth error</span>
    );
  }

  return (
    <header className="w-full h-[108px] bg-[#171B1B] px-[130px] flex items-center">
      <div className="w-full flex items-center justify-between">
        <div className="text-white text-[30px] font-semibold transition"> DreamHouse </div>
        <div className="bg-white rounded-full h-[52px] w-[553px] flex items-center justify-center gap-[49px] text-[#171B1B]">
          <button className="px-4 py-2 rounded-full bg-[#E6E6E6] transition hover:bg-[#F2B766] hover:text-white"> Home </button>
          <button className="px-4 py-2 transition hover:text-[#F2B766]"> Catalog </button>
          <button className="px-4 py-2 transition hover:text-[#F2B766]"> About Us </button>
          <button className="px-4 py-2 transition hover:text-[#F2B766]"> Contact </button>
        </div>
        <div className="flex items-center gap-10">
          {authElement}
          <button className="bg-[#F2B766] h-[47px] w-[183px] rounded-full text-[#171B1B] text-[16px] transition hover:bg-[#d99f4f] hover:scale-105"> Contact us </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;