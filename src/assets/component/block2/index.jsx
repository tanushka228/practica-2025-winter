import React from 'react'
import foto2 from '../../photo/foto2.png'

const Block2 = () => {
  return (
    <div className='w-full bg-[#171B1B] px-[57px] py-[60px] text-white'>
      <h2 className='text-[64px] font-semibold px-[57px]'> Popular objects </h2>

      {[1, 2, 3].map((_, index) => (
        <div key={index} className='w-full flex justify-between items-start mt-[60px]'>
          <img src={foto2} alt="house" className='w-[381px] h-[219px] rounded-[20px] object-cover items-center justify-center ml-[57px]'/>
          <div className='w-[350px] flex flex-col gap-[30px] ml-[30px]'>
            <h3 className='text-[32px] font-semibold leading-tight'> Modern house by <br /> the lake </h3>
            <div className='flex gap-5 text-[#E3E3E3] opacity-70 text-[16px]'>
              <p>3 beds</p>
              <p>2 baths</p>
              <p>1,745 sq.ft.</p>
            </div>

            <div className='flex gap-[60px] mt-[35px]'>
              <div className='flex flex-col items-center'>
                <p className='text-[24px] font-semibold'>$ 2,0 m</p>
                <p className='text-[14px] text-white'>One-time payment</p>
              </div>

              <div className='flex flex-col'>
                <p className='text-[24px] font-semibold'>$ 50,0 k</p>
                <p className='text-[14px] text-white'>Monthly payment</p>
              </div>
            </div>
          </div>

          <div className='w-[360px] flex flex-col gap-5'>
            <p className='text-[14px] leading-relaxed text-[#E3E3E3] opacity-70'>
              A cozy family home with a spacious terrace offering panoramic lake views.
              Inside, you'll find bright, well-planned living spaces that create a warm
              and inviting atmosphere. Surrounded by nature and peaceful scenery, this
              home is ideal for families who value comfort, privacy, and a beautiful
              environment for everyday life.
            </p>

            {/* <button className='bg-[#F2B766] text-black font-medium rounded-[20px] px-3 py-9 w-[183px] h-6 items-center justify-center text-[14px]'> More details </button> */}
             <button className="bg-[#F2B766] h-[47px] w-[183px] rounded-full text-[#171B1B] text-[14px] mt-[30px]">More details</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Block2;