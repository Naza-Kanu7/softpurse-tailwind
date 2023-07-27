import React from 'react'
import FirstStepImg from './FirstStepImg.png'
import SecondStepImg from './SecondStepImg.png'
import ThirdStepImg from './ThirdStepImg.png'

function Steps() {
  return (
    <div name='steps' className='w-full h-auto bg-steps-bg bg-cover mt-[-16rem] pt-[19rem] px-5 pb-[10rem] sm:pb-[14rem] md:px-10 2xl:mt-[-17rem] 2xl:pb-[17rem]'>
        <div className='pb-[4rem]'>
            <h2 className='text-[25px] text-whit font-bold xl:text-[30px]'>How it works</h2>
            {/* <p className='text-[18px] text-whit font-bold xl:text-[25px]'>To get started using the SoftPurse app, follow the steps Below</p> */}
            <p className='text-[18px] text-whit font-bold xl:text-[25px]'>. . . Just Follow a Simple Step to Get Started</p>
        </div>
        <div className='flex flex-wrap items-center justify-center xl:justify-normal gap-[2rem]'>
            <div className='w-[100%] h-[25rem] bg-whit rounded-lg relative 2sm:px-[15px] px-[20px] py-[30px] sm:px-[25px] sm:w-[70%] sm:h-[28rem] md:w-[45%] xl:w-[30%]'>
                <div className='absolute top-[40px] right-[1rem] border-2 border-solid border-blue-color rounded-[50%] px-[18px] py-[6px] text-blue-color text-[22px] text-center sm:right-[2rem]'><p>1</p></div>
                <div className='flex flex-col gap-[15px]'>
                    <div className=''>
                        <img src={FirstStepImg} alt='download-step'/>
                    </div>
                    <div className=''>
                        <h2 className='text-[21px] font-bold sm:text-[23px]'>Download and Sign Up :</h2>
                        <p className='text-[15px] font-semibold sm:text-[18px]'>Sign Up With Just Your Phone Number When You Download SoftPurse Mobile App from Google Playstore or Apple Store</p>
                        {/* <p className='text-[15px] font-semibold sm:text-[18px]'>Download SoftPurse Mobile App from Google Playstore and Sign up using your phone number</p> */}
                    </div>
                </div>
            </div>
            <div className=' w-[100%] h-[25rem] bg-whit rounded-lg relative 2sm:px-[15px] px-[20px] py-[30px] sm:px-[25px] sm:w-[70%] md:w-[45%] xl:w-[30%] sm:h-[28rem]'>
                <div className='absolute top-[40px] right-[1rem] border-2 border-solid border-blue-color rounded-[50%] px-[15px] py-[6px] text-blue-color text-[22px] text-center sm:right-[2rem]'><p>2</p></div>
                <div className='flex flex-col gap-[15px]'>
                    <div className=''>
                        <img src={SecondStepImg} alt='upgrade-step'/>
                    </div>
                    <div className=''>
                        <h2 className='text-[21px] font-bold sm:text-[23px]'>Upgrade to Enjoy Our Extensive Services :</h2>
                        <p className='text-[15px] font-semibold sm:text-[18px]'>Fill up our KYC form and gain access to Our Extensive Services.</p>
                        {/* <p className='text-[15px] font-semibold sm:text-[18px]'>Fill out our KYC form to verify your details and gain access to book for services.</p> */}
                    </div>
                </div>
            </div>
            <div className=' w-[100%] h-[25rem] bg-whit rounded-lg relative 2sm:px-[15px] px-[20px] py-[30px] sm:px-[25px] sm:w-[70%] sm:h-[28rem] md:h-[25rem] xl:w-[30%] xl:h-[28rem]'>
                <div className='absolute top-[40px] right-[1rem] border-2 border-solid border-blue-color rounded-[50%] px-[15px] py-[6px] text-blue-color text-[22px] text-center sm:right-[2rem]'><p>3</p></div>
                <div className='flex flex-col gap-[15px]'>
                    <div className=''>
                        <img src={ThirdStepImg} alt='service-provider-step'/>
                    </div>
                    <div className=''>
                        <h2 className='text-[21px] font-bold sm:text-[23px]'></h2>
                        {/* <h2 className='text-[21px] font-bold sm:text-[23px]'>Become a Service Provider :</h2> */}
                        <p className='text-[15px] font-semibold sm:text-[18px]'> . . . Make More Money</p>
                        {/* <p className='text-[15px] font-semibold sm:text-[18px]'> . . . Offer Multiple Services</p> */}
                        <p className='text-[15px] font-semibold sm:text-[18px]'> . . . Save Time</p>
                        <p className='text-[15px] font-semibold sm:text-[18px]'> . . . Reduce Risks</p>
                        {/* <p className='text-[15px] font-semibold sm:text-[18px]'> . . . Get Connected to your need </p> */}
                        <p className='text-[15px] font-semibold sm:text-[18px]'> . . . Cut Cost and Save Money</p>
                        {/* <p className='text-[15px] font-semibold sm:text-[18px]'>Choose the services you offer and get matched with customers in need of your services.</p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps