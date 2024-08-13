import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { BsPlusLg } from "react-icons/bs";
import Docs from '../components/Docs';
import { MdEmail } from "react-icons/md";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px]">
        <h3 className='mt-7 mb-3 text-3xl'>All Documents</h3>
        <button className="btnBlue" onClick={toggleModal}><i><BsPlusLg /></i> Create New Document</button>
      </div>

      <div className='allDocs px-[100px] mt-4'>
        <Docs />
        <Docs />
        <Docs />
        <Docs />
      </div>

      {isModalOpen && (
        <div className="createDocsModelCon fixed bg-[rgb(0,0,0,.3)] top-0 left-0 right-0 bottom-0 w-screen h-screen flex flex-col items-center justify-center">
          <div className="createDocsModel p-[15px] bg-[#fff] rounded-lg w-[35vw] h-[250px]">
            <h3 className='text-[20px]'>Create new Document</h3>

            <div className='inputCon mt-3'>
              <p className='text-[14px] text-[#808080]'>Text</p>
              <div className="inputBox w-[100%]">
                <i><MdEmail /></i>
                <input type="text" placeholder='text' id='text' name='text' required />
              </div>
            </div>

            <div className="flex items-center gap-2 justify-between w-full mt-4">
              <button className='btnBlue min-w-[49%]'>Create New Document</button>
              <button onClick={toggleModal} className='p-[10px] bg-[#D1D5DB] text-black rounded-lg border-0 cursor-pointer min-w-[48%]'>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home;
