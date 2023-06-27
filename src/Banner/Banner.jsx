import React from 'react'
import bannerImg from './BannerImg.png'
import googlePlayImg from'./googleplay.png'
import { Link, animateScroll as scroll, } from 'react-scroll'

function Banner() {
  return (
    <div name='home' className='w-full h-auto bg-banner-bg px-5 py-8 pb-[7rem] md:px-10 md:pb-[12rem]  lg:pb-[14rem]  xl:pb-[17rem]'>
        <div className='flex flex-col justify-between gap-[3rem] md:flex-row'>
            <div className='flex flex-col md:pt-[3rem] 2xl:pt-[5rem]'>
                <h1 className='text-[30px] font-bold pb-4 sm:text-[35px] lg:text-[40px] 2xl:text-[50px]'>Providing Solutions, and Enriching You</h1>
                <p className='text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[40px]'>The best app to increase your productivity, giving your craft online presence.</p>
                <div className='flex 2sm:flex-col flex-row items-center justify-center gap-3 pt-4 sm:flex-row sm:items-center sm:pt-7 lg:gap-11 lg:pt-6 xl:pt-10 2xl:pt-12'>
                    
                    {/* <button className='bg-banner-button text-whit 2sm:px-7 px-4 py-3 sm:px-9 sm:py-5 rounded-[10px] text-[17px] md:w-[170px] xl:w-[15rem]'><Link to="faq" smooth={true} offset={-200} duration={500}>Learn More</Link></button> */}
                    <div className='w-[9rem] 2sm:w-[9.7rem] h-[3.1rem] rounded-[10px] cursor-pointer sm:w-[13rem] sm:h-[4rem] md:w-[12rem] lg:w-[12rem] xl:w-[14rem]'>
                        <img src={googlePlayImg} alt="google-play-img" className='w-full h-full rounded-[10px]' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[70%] flex justify-center items-center md:h-[25rem] md:w-[60rem] md:pt-7 xl:h-[30rem] 2xl:h-[40rem]'>
                <img src={bannerImg} alt="phone-img" className='w-[80%] h-full md:w-full' />
            </div>
        </div>
        
    </div>
  )
}

export default Banner