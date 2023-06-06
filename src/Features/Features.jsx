import React from 'react'
import FirstFeatureImg from './FirstFeatureImg.png'
import SecondFeatureImg from './SecondFeatureImg.png'
import ThirdFeatureImg from './ThirdFeatureImg.png'

function Features() {
  
  return (
    <div name='features' className="h-auto w-full bg-features-bg bg-cover mt-[-9rem] px-5 pb-[14rem] pt-[10rem] md:mt-[-11rem] md:pt-[12rem] md:px-10 lg:mt-[-13rem] lg:pt-[12rem] xl:mt-[-15rem] xl:pt-[14rem] 2xl:mt-[-17rem] 2xl:pt-[17rem] 2xl:pb-[17rem]" >
       <h1 className='text-[30px] font-bold text-blue-color sm:text-[35px]'>Amazing Features</h1>
       <p className='text-blue-color text-[20px] sm:text-[23px]'>Packed with amazing features just for you</p>
       <div className='flex flex-col gap-[40px] w-full items-center md:gap-[40px] lg:flex-row lg:items-center lg:gap-[5rem]'>
          <div className='pt-[5rem] w-auto h-[15rem] flex justify-center items-center sm:h-[17rem] lg:w-[40%] xl:h-[20rem]'>
            <img src={FirstFeatureImg} alt="fix-the-problem" className='w-full h-full' />
          </div>
          <div className='w-full lg:w-[50%] lg:pt-[5rem]'>
            {/* <h1>Less Stress, Get Your Needs Sorted Out At Your Comfort</h1> */}
            {/* <p>Get connected to Skilled Artisans around you instantly with a tap of a button at your comfort.</p> */}
            <h1 className='text-[32px] font-bold text-blue-color pb-3 sm:text-[34px]'>...Fix the Problem with Ease!</h1>
            <p className='text-blue-color text-[22px] sm:text-[22px]'>Connect with a Skilled Artisan around you instantly with a tap of a button at your comfort.</p>
          </div>
       </div>
       <div className='flex flex-col-reverse gap-[30px] w-full items-center md:gap-[40px] lg:flex-row lg:items-center lg:gap-[5rem]'>
          <div className='w-full lg:w-[45%] lg:pt-[5rem]'>
            {/* <p>Showcase your skills and expertise to attract new clients and build a successful business on our platform.</p> */}
            <h1 className='text-[32px] font-bold text-blue-color pb-3 sm:text-[34px]'>Showcase Your Skills:</h1>
            <p className='text-blue-color text-[22px] sm:text-[22px]'>You have the Skill, we have the Platform! <br /> Let's tell the world about your amazing skill. <br /> Sign up now. </p>
          </div>
          <div className='pt-[5rem] 2sm:w-[15rem] w-[22rem] h-[25rem] flex justify-center items-center sm:h-[27rem] sm:w-[24rem] md:h-[29rem] md:w-[26rem] lg:w-[50%] xl:h-[32rem] 2xl:h-[35rem]'>
            <img src={SecondFeatureImg} alt="showcase-your-skills" className='w-full h-full' />
          </div>
       </div>
       <div className='flex flex-col gap-[30px] w-full items-center md:gap-[40px] lg:flex-row lg:items-center lg:gap-[5rem]'>
          <div className='pt-[5rem] 2sm:w-[15rem] w-[20rem] h-[25rem] flex justify-center items-center sm:w-[22rem] sm:h-[27rem] lg:w-[40%] xl:h-[32rem] 2xl:h-[35rem]'>
            <img src={ThirdFeatureImg} alt="multiple-services" className='w-full h-full' />
          </div>
          <div className='w-full lg:w-[50%] lg:pt-[5rem]'>
            {/* <p>Connect with a service provider who can fix your problem and meet your need from our intensive list of services.</p> */}
            <h1 className='text-[32px] font-bold text-blue-color pb-3 sm:text-[34px]'>Multiple Services at Your Fingertips:</h1>
            <p className='text-blue-color text-[22px] sm:text-[22px]'>Choose from our multiple services and get connected to a professional to meet your specific demand.</p>
          </div>
       </div>
    </div>
  )
}

export default Features