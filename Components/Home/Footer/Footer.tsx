import React from 'react'
import { FaFacebook, FaGlobeAmericas, FaInstagram, FaTwitter } from 'react-icons/fa'
import { navLinks } from '../../../constant/constant'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='pt-20 bg-blue-950'>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
        {/* website logo */}
        <div className="text-white space-y-3">
          <div className="flex items-center gap-2 text-2xl font-bold ">
            <FaGlobeAmericas className="" />
            <h1 className=''>Trevia</h1>
          </div>
          <p>Discover the world&apos;s most loved travel spots, rich with culture, adventure, and unforgettable experiences.</p>
        </div>
        {/* links */}
        <div className="space-y-3 text-white mx-auto">
          <h1 className='text-2xl font-bold '>Quick Links</h1>
          <div className="flex flex-col justify-center items-start gap-2">
            {
              navLinks.map(link => <Link href={link.url} key={link.id}>
                <p className="relative font-medium w-fit block after:block after:content-[''] after:absolute  after:h-[3px] after:bg-rose-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-left">{link.label}</p>
              </Link>)
            }
          </div>
        </div>
        {/* contact us */}
        <div className="text-white space-y-3">
          <h1 className='text-2xl font-bold'>Contact Us</h1>
          <div className="">
            <p>Our Mobile Number</p>
            <p className='text-lg font-semibold'>+8801928294516</p>
          </div>
          <div className="">
            <p>Our Email</p>
            <p className='text-lg font-semibold'>gmramjanali88@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="bg-[#111827] mt-5 py-5">
        <div className="w-[80%] mx-auto flex flex-col sm:flex-row justify-between">
          <div className="text-white">
            © {new Date().getFullYear()} Trevia | Tour Guides Platform. All
            rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white">
            <p>Social:</p>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  )
}
