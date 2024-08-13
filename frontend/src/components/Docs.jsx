import React from 'react'
import docsIcon from "../images/docsIcon.png"
import { MdDelete } from "react-icons/md";

const Docs = ({docs}) => {
  return (
    <>
     <div className='docs cursor-pointer rounded-lg flex items-center mt-2 justify-between p-[10px] bg-[#F0F0F0] transition-all hover:bg-[#DCDCDC]'>
      <div className="left flex items-center gap-2">
        <img src={docsIcon} alt=''></img>
        <div>
            <h3 className='text-[20px]'>Tips for me</h3>
            <p className='text-[14px] text-[#808080]'>created by me</p>
        </div>
      </div>
      <div className="docsRight">
        <i className="delete text-[30px] text-red-500 cursor-pointer transition-none hover:text-red-600"><MdDelete /></i>
      </div>
     </div>
    </>
  )
}

export default Docs