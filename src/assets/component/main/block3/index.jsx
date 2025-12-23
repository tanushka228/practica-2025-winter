import React from 'react';

const Block3 = () => {
  return (
    <div className='bg-[#E3E3E3] w-[1440px] h-[910px] flex flex-col items-center pt-[60px]'>

      <div className='text-[64px] font-semibold mb-10 mt-[61px]'>Agency advantages </div>

      <div className='grid grid-cols-3 gap-[30px] px-[60px]'>

        {/* Full Transaction Support */}
        <div className='bg-white rounded-[20px] p-[27px] w-[468px] h-[600px] justify-center items-center transition-transform duration-300 hover:scale-105'>
          <h2 className='text-[24px] font-semibold mb-[15px]'> Full Transaction Support </h2>
          <p className='text-[14px] leading-5 opacity-70 text-[#2C2C2C]'>
            We handle the entire process from start to finish, ensuring that every stage is professionally managed and fully transparent. Our support includes:
          </p>
          <ul className='text-[14px] mt-[15px] leading-5 list-disc ml-5 text-[#2C2C2C] opacity-70'>
            <li>Market Analysis: We study current trends, pricing dynamics, and comparable properties to provide accurate guidance for informed decisions.</li>
            <li>Property Selection: We carefully choose the best options based on your goals, budget, and preferences, saving you time and effort.</li>
            <li>Legal Due Diligence: Every property undergoes a full legal check to ensure its safety, authenticity, and compliance with regulations.</li>
            <li>Document Preparation: We prepare and verify all necessary documents to guarantee accuracy and eliminate potential risks.</li>
            <li>Negotiation of Terms: We negotiate on your behalf to secure the most favorable price and conditions.</li>
            <li>Support Until Handover: We stay with you through every step of the closing process, ensuring a smooth, stress-free transfer of ownership.</li>
          </ul>
          <p className='text-[14px] leading-5 opacity-70 mt-[15px] text-[#2C2C2C]'>
            With our agency, clients receive a secure, transparent, and efficient transaction without stress, hidden issues, or unnecessary complications.
          </p>
        </div>

        {/* Accurate and Well-Founded Property Valuation */}
        <div className='bg-[#1F1F1F] text-white rounded-[20px] p-[30px] w-[406px] h-[300px] ml-8 transition-transform duration-300 hover:scale-105'>
          <h2 className='text-[24px] font-semibold mb-[15px]'>Accurate and Well-Founded Property Valuation</h2>
          <ul className='text-[14px] leading-5 list-disc ml-5 text-[#E3E3E3] opacity-70'>
            <li>We analyze current market data to determine real property value.</li>
            <li>Compare your property with similar listings in the area.</li>
            <li>Use proven valuation methods for reliable pricing.</li>
            <li>Help sellers avoid underselling and buyers avoid unnecessary overpayment.</li>
          </ul>
        </div>

        {/* Tailored Solutions for Every Client */}
        <div className='bg-white rounded-[20px] p-[30px] w-[406px] h-[300px] transition-transform duration-300 hover:scale-105'>
          <h2 className='text-[24px] font-semibold mb-[15px]'>Tailored Solutions for Every Client</h2>
          <ul className='text-[14px] leading-5 list-disc ml-5 text-[#2C2C2C] opacity-70'>
            <li>Consider each client’s goals, budget, and deadlines.</li>
            <li>Offer personalized strategies for every situation.</li>
            <li>Adapt our approach to buying, selling, renting, or investing.</li>
            <li>Provide guidance that aligns with your specific needs and interests.</li>
          </ul>
        </div>

        {/* Access to Exclusive Listings */}
        <div className='bg-white rounded-[20px] p-[30px] w-[406px] h-[270px] ml-[485px] mt-[-300px] transition-transform duration-300 hover:scale-105'>
          <h2 className='text-[24px] font-semibold mb-[15px]'>Access to Exclusive Listings</h2>
          <ul className='text-[14px] leading-5 list-disc ml-5 text-[#2C2C2C] opacity-70'>
            <li>Provide access to properties not available on public platforms.</li>
            <li>Offer high-quality, rare, and premium options.</li>
            <li>Give clients opportunities that are accessible only through our agency.</li>
            <li>Help you find unique properties that stand out from the general market.</li>
          </ul>
        </div>

        {/* Reduced Sale and Purchase Timeframes */}
        <div className='bg-[#1F1F1F] text-white rounded-[20px] p-[25px] w-[406px] h-[270px] ml-114 mt-[-300px] transition-transform duration-300 hover:scale-105'>
          <h2 className='text-[24px] font-semibold mb-[15px]'>Reduced Sale and Purchase Timeframes</h2>
          <ul className='text-[14px] leading-5 opacity-70 list-disc ml-5 text-[#E3E3E3]'>
            <li>Prepare all documents quickly and accurately.</li>
            <li>Attract motivated buyers through effective channels.</li>
            <li>Conduct negotiations efficiently to speed up decisions.</li>
            <li>Ensure a significantly faster and smoother transaction process.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Block3;