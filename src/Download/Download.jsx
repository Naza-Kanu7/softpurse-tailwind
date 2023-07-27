import React from 'react'
import DownloadPhoneImg from './DownloadPhoneImg.png'
import QrCode from './QrCode.png'
import GooglePlay from './GooglePlay.png'

function Download() {
  return (
    <div name='download' className='w-full bg-banner-bg flex flex-col items-center px-5 md:px-10 py-[4rem] gap-[3rem] lg:flex-row lg:gap-[0.5rem] xl:gap-[1.5rem] 2xl:gap-[7.5rem]'>
        <div className='w-full h-[25rem] px-2 sm:h-[32rem] md:h-[45rem] lg:w-[50%] lg:h-[33rem] xl:h-[42rem] 2xl:w-[40%] 2xl:h-[47rem]'>
            <img src={DownloadPhoneImg} alt="softpurse-phone" className='w-full h-full' />
        </div>
        <div className='w-full flex flex-col items-center gap-5 lg:w-[45%]'>
            <h3 className='text-[25px] text-center font-bold sm:text-[35px] md:text-[40px] lg:text-[35px]'>Download now and enjoy all the amazing features</h3>
            <div className='bg-whit w-[70%] px-4 py-4 rounded-lg sm:w-[50%] md:w-[50%] lg:w-[50%] 2xl:w-[40%]'>
                <img src={QrCode} alt="qr-code" className='w-full h-full' />
            </div>
            <div className='w-[65%] h-[6rem] sm:h-[8rem] md:h-[10rem] md:w-[55%] lg:w-[45%] lg:h-[7rem] 2xl:w-[40%] 2xl:h-[8rem]'>
                <img src={GooglePlay} alt="google-play-button" className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Download