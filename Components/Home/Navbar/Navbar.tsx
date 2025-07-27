import React from 'react'
import { navLinks } from '../../../constant/constant'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

type props = {
  openNav: () => void
}
export default function Navbar({ openNav }: props) {

  return (
    <div className='bg-blue-950 transition-all duration-300 h-[12vh] z-[1000] text-white fixed w-full'>
      <div className="flex justify-between items-center mx-auto h-full w-[90%] lg:w-[80%]">
        {/* Logo */}
        <div className="">
          <h1 className='text-2xl font-bold'>Travel</h1>
        </div>
        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          {
            navLinks.map(link => <Link href={link.url} key={link.id}>
              <p className="relative font-medium w-fit block after:block after:content-[''] after:absolute  after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-left">{link.label}</p>
            </Link>)
          }
        </div>
        <div className="flex items-center space-x-4">
          <button className='px-6 py-2 bg-white text-black rounded-xl'>Booking Now</button>
          {/* Hamburger Menu (Mobile) */}
          <RxHamburgerMenu onClick={openNav} className='w-7 h-7 lg:hidden text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
