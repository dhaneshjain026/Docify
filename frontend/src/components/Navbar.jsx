import React from 'react'
import logo from "../images/logo.png"
import { RiSearchLine } from "react-icons/ri";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <>
       <div className="navbar flex items-center px-[100px] h-[90px] justify-between bg-[#F4F4F4]">
        <img src={logo} alt="" />

        <div className="right flex items-center justify-end gap-2">
          <div className="inputBox w-[30vw]">
            <i><RiSearchLine /></i>
            <input type="text" placeholder='Search Here... !' />
          </div>
          <Avatar name="dhanesh"  className='cursor-pointer' size="40" round="50%" />
        </div>
      </div>
    </>
  )
}

export default Navbar