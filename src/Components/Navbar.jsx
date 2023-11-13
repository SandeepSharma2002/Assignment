import React, { useState } from 'react'
import { MdOutlineSort } from "react-icons/md"
import { FaUserAlt} from "react-icons/fa"
import { BiHome } from "react-icons/bi"
import { RiMicroscopeLine } from "react-icons/ri"
import {  PiNotebookFill } from "react-icons/pi"
import { FaLinesLeaning} from "react-icons/fa6"

export const Navbar = () => {

  const [Sidebartoggler, setSidebartoggler] = useState(false);

  return (
    <div>
      <div className=' bg-[#606c5d] w-full'>
      <div className='flex justify-between py-2 w-4/5 mx-auto items-center'>
        <MdOutlineSort size={40} onClick={()=>setSidebartoggler(!Sidebartoggler)}/>
        <FaUserAlt size={30}  color='#af8181' />
      </div>
      </div>
      <div className='relative h-full'>
      <div className={`absolute left-0 h-screen top-0 z-10 flex gap-10 pt-10 pl-4 w-72 text-3xl flex-col bg-[#f5f5f5] duration-300 ease-linear ${
        Sidebartoggler ? "translate-x-0" : "-translate-x-full"
      }`}>
         <a href="" className='flex align-middle cursor-pointer gap-2'><BiHome/><span className='text-xl'>Summary Dashboard</span></a>
         <a href="" className='flex align-middle cursor-pointer gap-2'><FaLinesLeaning/><span className='text-xl'>Attendance Tracking</span></a>
         <a href="" className='flex align-middle cursor-pointer gap-2'><RiMicroscopeLine/><span className='text-xl'>Behavioral Analytics</span></a>
         <a href="" className='flex align-middle cursor-pointer gap-2'><PiNotebookFill/><span className='text-xl'>Academic Performance Tracking</span></a>
      </div>
      </div>
    </div>
  )
}
