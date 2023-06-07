import React from 'react'

const Header = () => {
  return (
    <div className='header font-barlow flex justify-between rounded-2xl border-[3px] border-[#606e85] p-[1.5rem] mt-10'>
        <div className='header-title flex flex-col text-left text-[2.5rem] uppercase leading-8 font-semibold'>
          <span>Rock</span>
          <span>Paper</span>
          <span>Scissors</span>
        </div>
        <div className='header-score bg-white  rounded-lg   px-[3rem] leading-10'>
          <p className='text-[#2a46c0] font-semibold '>Score</p>
          <span className='text-[#3b4363] font-semibold  text-[3rem]'>0</span>
        </div>
    </div>
  )
}

export default Header