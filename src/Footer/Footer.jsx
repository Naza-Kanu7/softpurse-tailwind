import React from 'react'
import FooterLogo from './footerlogo.png'
import GooglePlay from './footergoogleplay.png'
import Facebook from './Facebook.png'
import Whatsapp from './Whatsapp.png'
import Instagram from './Instagram.png'
import Twitter from './Twitter.png'

function Footer() {
  return (
    <div name='footer' className='w-full bg-footer-bg py-[4rem] flex flex-col items-center gap-[2rem]'>
        <div className='flex flex-col gap-[0.9rem] items-center md:flex-row md:pl-[6rem]'>
            <div className='w-[50%] sm:w-[40%]'>
                <img src={FooterLogo} alt="" className='w-full h-full' />
            </div>
            <div className='w-[50%] sm:w-[40%]'>
                <img src={GooglePlay} alt="" className='w-full h-full' />
            </div>
        </div>
        <div className='w-[55%] flex flex-row gap-5 sm:gap-7 items-center md:gap-9 lg:w-[40%] xl:w-[30%] 2xl:w-[20%]'>
            <div className='w-[16%] h-[2.5rem] sm:w-[20%] sm:h-[3.5rem] md:w-[20%] md:h-[4rem] cursor-pointer'>
                <a href='https://www.facebook.com/profile.php?id=100077394650393&mibextid=ZbWKwL' target='_blank' rel="noreferrer"><img src={Facebook} alt="facebook" className='w-full h-full'/></a>
            </div>
            <div className='w-[16%] h-[2.5rem] sm:w-[20%] sm:h-[3.5rem] md:w-[20%] md:h-[4rem] cursor-pointer'>
                <a href='https://wa.link/a78qdh' target='_blank' rel="noreferrer"><img src={Whatsapp} alt="whatsapp" className='w-full h-full'/></a>
            </div>
            <div className='w-[16%] h-[2.5rem] sm:w-[20%] sm:h-[3.5rem] md:w-[20%] md:h-[4rem] cursor-pointer'>
                <a href='https://twitter.com/techservafrica?t=-IaMPK5wihoW6SzUJkKPqA&s=09' target='_blank' rel="noreferrer"><img src={Twitter} alt="twitter" className='w-full h-full'/></a>
            </div>
            <div className='w-[16%] h-[2.5rem] sm:w-[20%] sm:h-[3.5rem] md:w-[20%] md:h-[4rem] cursor-pointer'>
                <a href='https://instagram.com/techservafrica?igshid=ZDdkNTZiNTM=' target='_blank' rel="noreferrer"><img src={Instagram} alt="instagram" className='w-full h-full'/></a>
            </div>
        </div>
        <div className='text-center'>
            <h3 className='text-whit font-semibold sm:text-[1.5rem]'>Service support</h3>
            <p className='text-whit sm:text-[1.5rem]'>softpurse123@gmail.com</p>
        </div>
        <p className='text-whit sm:text-[1.5rem]'>Copyright &#64; SoftPurse 2023</p>
    </div>
  )
}

export default Footer