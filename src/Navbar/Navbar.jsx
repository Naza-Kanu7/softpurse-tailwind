import React from 'react'
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import softpurseLogo from './SoftPurseLogo.png'
import { Link, animateScroll as scroll, } from 'react-scroll'

function Navbar() {

    const [dropdown, setDropdown] = useState(false)
    const [linkSelected, setLinkSelected] = useState('home')


    const handleNavLinks = (value) => {
        setLinkSelected(value)
    }

    const handleMenuBtnClick = () => {
        setDropdown(!dropdown)
    }
    const handleClose = () => setDropdown(!dropdown)

  return (
    <div className='w-full h-[10%] bg-whit sticky top-0 z-10 shadow shadow-bottom'>
        <div className='px-1 py-4 flex justify-between items-center w-full h-full'>
            <div className='flex items-center ml-4 w-[11rem] h-[3rem] sm:w-[13rem] sm:h-[3.5rem] md:ml-10 lg:w-[15rem] lg:h-[3.5rem]'>
                <img src={softpurseLogo} alt="softpurselogo" className='w-full h-full' />
            </div>
            <ul className='hidden md:flex mr-10 md:mr-4'>
                <div className='cursor-pointer'>
                    <li>
                        <Link to="home" smooth={true} duration={700} className={linkSelected === 'home' ? 'bg-custom-color rounded-lg text-whit px-4 py-2 font-bold' : 'text-custom-color px-4 py-2 font-bold'} onClick={() => handleNavLinks("home")}>
                            Home
                        </Link>
                    </li>
                </div>
                <div className='cursor-pointer'>
                    <li>
                        <Link to="features" smooth={true} offset={-50} duration={500} className={linkSelected === 'features' ? 'bg-custom-color rounded-lg text-whit px-4 py-2 font-bold' : 'text-custom-color px-4 py-2 font-bold'} onClick={() => handleNavLinks("features")}>
                            Features
                        </Link>
                    </li>
                </div>
                <div className='cursor-pointer'>
                    <li>
                        <Link to="faq" smooth={true} offset={-50} duration={500} className={linkSelected === 'faq' ? 'bg-custom-color rounded-lg text-whit px-4 py-2 font-bold' : 'text-custom-color px-4 py-2 font-bold'} onClick={() => handleNavLinks("faq")}>
                            FAQ
                        </Link>
                    </li>
                </div>
                <div className='cursor-pointer'>
                    <li>
                        <Link to="download" smooth={true} offset={-50} duration={500} className={linkSelected === 'download' ? 'bg-custom-color rounded-lg text-whit px-4 py-2 font-bold' : 'text-custom-color px-4 py-2 font-bold'} onClick={() => handleNavLinks("download")}>
                            Download
                        </Link>
                    </li>
                </div>
            </ul>
            <div className="md:hidden cursor-pointer" onClick={handleMenuBtnClick}>
                {!dropdown ? <MenuIcon className="w-9 text-custom-color mr-6" /> : <XIcon className="w-9 text-custom-color mr-6" /> }
            </div>
        </div>
        <ul className={!dropdown ? 'hidden' : 'absolute bg-whit w-full px-6'}>
            <Link onClick={handleClose} to="home" smooth={true} duration={800}>
                < li className='border-b-2 border-zinc-300 w-full text-custom-color rounded-lg hover:bg-custom-color hover:text-whit cursor-pointer'>Home</li>
            </Link>
            <Link onClick={handleClose} to="features" smooth={true} offset={-50} duration={800}>
                < li className='border-b-2 border-zinc-300 w-full text-custom-color rounded-lg hover:bg-custom-color hover:text-whit cursor-pointer'>Features</li>
            </Link>
            <Link onClick={handleClose} to="faq" smooth={true} offset={-50} duration={800}>
                < li className='border-b-2 border-zinc-300 w-full text-custom-color rounded-lg hover:bg-custom-color hover:text-whit cursor-pointer'>FAQ</li>
            </Link>
            <Link onClick={handleClose} to="download" smooth={true} offset={-50} duration={800}>
                < li className='border-b-2 border-zinc-300 mb-7 w-full text-custom-color rounded-lg hover:bg-custom-color hover:text-whit cursor-pointer'>Download</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar