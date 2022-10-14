import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const Navbar = () => {

  const [openCart, setOpenCart] = useState(true)
  const setcart = useSelector((state) => state.openCart)
  console.log(setcart)
  const cart = () => {
    setOpenCart(!openCart)
  }
  return (
    <>
      <div className="hidden md:block w-full bg-[#d4ecef]">
        <div className="flex  mx-auto max-w-[1720px]">
          {/* Logo */}
          <div className="w-1/4 py-4 flex px-10 items-center">
            <p className='font-semibold text-2xl'>LOGO</p>
          </div>
          {/* Search */}
          <div className="w-1/2 py-4">
            <label className="relative block">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full 
              border border-slate-300 rounded-3xl py-2.5 pl-5 pr-3 shadow-sm focus:outline-none
               focus:border-yellow-600 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
              <span className="sr-only">Search</span>
              <span className="absolute cursor-pointer inset-y-0 right-0 flex items-center bg-yellow-400 rounded-r-3xl  px-4">
                <BiSearch className='cursor-pointer' />
              </span>
            </label>

          </div>
          {/* Cart */}
          <div className="w-1/4 px-2 py-4  flex items-center justify-center gap-4">
            <motion.div className=""
              whileTap={{ scale: 0.75 }}>
              <CgProfile className='w-6 h-6 cursor-pointer' />
            </motion.div>
            <motion.div className="relative"
              whileTap={{ scale: 0.75 }}>
              <BsCart2 className='w-6 h-6 cursor-pointer' onClick={cart} />
              <p className='absolute bg-yellow-400 rounded-full w-4 h-4 flex items-center 
            text-white justify-center font-medium -top-1.5  -right-2 text-xs'>1</p>
            </motion.div>
            <motion.div className=""
              whileTap={{ scale: 0.75 }}>
              <CgProfile className='w-6 h-6 cursor-pointer' />
            </motion.div>
          </div>
          {(openCart === false) ? <Cart /> : <></>}
        </div>
      </div>


      {/* mobile view  */}
      <div className="md:hidden block bg-[#d4ecef]">
        <div className="flex justify-between">
          <div className="w-1/2 px-5 pt-3 flex justify-start items-center">
            <p className='font-semibold text-2xl'>LOGO</p>
          </div>
          {/* Cart */}
          <div className="w-1/2 pt-3  flex items-center justify-end px-5 gap-4">
            <div className="">
              <CgProfile className='w-6 h-6 cursor-pointer' />
            </div>
            <div className="relative">
              <BsCart2 className='w-6 h-6 cursor-pointer' onClick={cart} />
              <p className='absolute bg-yellow-400 rounded-full w-4 h-4 flex items-center 
            text-white justify-center font-medium -top-1.5  -right-2 text-xs'>1</p>
            </div>
            <div className="">
              <CgProfile className='w-6 h-6 cursor-pointer' />
            </div>
          </div>
        </div>
        {/* Search */}
        <div className="w-full  px-4 py-2">
          <label className="relative block">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full 
              border border-slate-300 rounded-3xl py-2.5 pl-5 pr-3 shadow-sm focus:outline-none
               focus:border-yellow-600 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-0 flex items-center bg-yellow-400 rounded-r-3xl  px-4">
              <BiSearch />
            </span>
          </label>

        </div>
        {(openCart === false) ? <Cart /> : <></>}
      </div>
    </>
  )
}

export default Navbar