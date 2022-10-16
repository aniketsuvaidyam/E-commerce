import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import User from './User';

const Navbar = () => {

  const [openCart, setOpenCart] = useState(true)
  const [openUserMenu, setOpenUserMenu] = useState(true)
  const setcart = useSelector((state) => state.openCart)
  console.log(setcart)
  const cart = () => {
    setOpenCart(!openCart)
  }
  const openMenu = () => {
    setOpenUserMenu(!openUserMenu)
  }

  return (
    <>
      <div className="hidden md:block w-full bg-orange-500 shadow-md ">
        <div className="flex  mx-auto max-w-[1720px]">
          {/* Logo */}
          <div className="w-1/5 py-4 flex  justify-center items-center">
            <p className='font-extrabold text-3xl'>
              <img className='w-32' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt="" />
            </p>
          </div>
          {/* Search */}
          <div className="w-2/3 py-4 px-6 lg:px-10">
            <label className="relative block">
              <input
                className=" placeholder:text-slate-400 placeholder:font-semibold font-semibold
                 text-slate-600 block bg-white w-full 
              border border-slate-300  py-2 pl-5 pr-3 shadow-sm focus:outline-none
               focus:border-yellow-600 focus:ring-yellow-500 focus:ring-1 sm:text-md "
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
              <span className="sr-only">Search</span>
              <span className="absolute cursor-pointer inset-y-0 right-0 flex items-center bg-yellow-400  px-4">
                <BiSearch className='cursor-pointer text-white text-xl' />
              </span>
            </label>

          </div>
          {/* Cart */}
          <div className="w-1/5 px-2 py-4  flex items-center justify-center gap-6">
            <motion.div className=""
              whileTap={{ scale: 0.75 }}>
              <BsFillHeartFill className='w-6 h-6 cursor-pointer text-white' />
            </motion.div>
            <motion.div className="relative"
              whileTap={{ scale: 0.75 }}>
              <HiShoppingCart className='w-7 h-7 cursor-pointer text-white' onClick={cart} />
              <p className='absolute bg-yellow-400 rounded-full w-4 h-4 flex items-center 
            text-white justify-center font-medium -top-2.5  -right-2.5 text-xs'>1</p>
            </motion.div>
            <motion.div className=""
              whileTap={{ scale: 0.75 }}>
              <CgProfile className='w-7 h-7 cursor-pointer text-white' />
            </motion.div>
          </div>
          {(openCart === false) ? <Cart cart={cart} /> : <></>}
        </div>
      </div>


      {/* mobile view  */}
      <div className="md:hidden block bg-orange-500">
        <div className="flex justify-between w-full pt-3 pb-2">
          <div className="w-1/3 flex pl-5 items-center">
            <FaBars className='text-2xl cursor-pointer text-white' onClick={openMenu} />
          </div>
          <div className="w-1/3 px-5  flex justify-start items-center">
            <p className='font-semibold text-2xl'>
              <img className='w-24 h-6' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt="" />
            </p>
          </div>
          {/* Cart */}
          <div className="w-1/3   flex items-center justify-end px-5 gap-4">
            <motion.div className=""
              whileTap={{ scale: 0.75 }}>
              <BsFillHeartFill className='w-6 h-6 cursor-pointer text-white' />
            </motion.div>
            <motion.div className="relative"
              whileTap={{ scale: 0.75 }}>
              <HiShoppingCart className='w-7 h-7 cursor-pointer text-white' onClick={cart} />
              <p className='absolute bg-yellow-400 rounded-full w-4 h-4 flex items-center 
            text-white justify-center font-medium -top-2.5  -right-2.5 text-xs'>1</p>
            </motion.div>

          </div>
        </div>
        {/* Search */}
        <div className="w-full  px-5 py-2">
          <label className="relative block">
            <input
              className=" placeholder:text-slate-400 block bg-white w-full 
              border border-slate-300  py-2 px-3 shadow-sm focus:outline-none
               focus:border-yellow-600 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-0 flex items-center bg-yellow-400   px-3.5">
              <BiSearch className='text-white text-xl' />
            </span>
          </label>

        </div>
        {(openCart === false) ? <Cart cart={cart} /> : <></>}




        {/* =====================================User Details============================= */}
        {openUserMenu === false ? <User openMenu={openMenu} /> : <></>}
      </div>
    </>
  )
}

export default Navbar