'use client'
import React, { useEffect, useState } from 'react'
import { navLinks } from '../../../constant/constant'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'

type props = {
  openNav: () => void
}
export default function Navbar({ openNav }: props) {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true)
      if (window.scrollY < 90) setNavBg(false)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <div className={` fixed w-full transition-all duration-300 h-[12vh] z-[1000] text-white ${navBg ? 'bg-blue-950 shadow-lg' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center mx-auto h-full w-[95%] lg:w-[90%]">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <FaGlobeAmericas className="text-white" />
          <h1 className=''>Trevia</h1>
        </div>
        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          {
            navLinks.map(link => <Link href={link.url} key={link.id}>
              <p className="relative font-medium w-fit block after:block after:content-[''] after:absolute  after:h-[3px] after:bg-rose-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-left">{link.label}</p>
            </Link>)
          }
        </div>
        <div className="flex items-center space-x-4">
          <button className='px-4 py-2 bg-white text-black rounded-lg font-medium flex items-center gap-0.5 cursor-pointer hover:text-rose-500'><span><IoMdLogIn /></span>Login</button>
          {/* Hamburger Menu (Mobile) */}
          <RxHamburgerMenu onClick={openNav} className='w-7 h-7 lg:hidden text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
