import React from 'react'
import { motion } from 'framer-motion'
import { CgProfile } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { BiLogOutCircle, BiStore } from "react-icons/bi";
import './User.css'

const User = (props) => {
    return (
        <>
            <div className=''>
                {/* mobile view */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    className="fixed top-0 z-[1000] w-3/4  h-full  bg-gray-50 shadow-md block md:hidden">
                    <div className="flex justify-between w-full px-4 py-3.5 bg-orange-500">
                        <MdClose className='w-7 h-7 cursor-pointer text-white' onClick={props.openMenu} />
                        <p className='text-xl font-semibold text-white'>Rahul</p>
                        <div className="">
                            <CgProfile className='w-7 h-7 cursor-pointer text-white' />
                        </div>
                    </div>
                    <div className=" w-full flex flex-col  h-full ">
                        <p className='flex items-center gap-3 p-3 hover:bg-gray-100'>
                            <CgProfile className='text-orange-500' />
                            <p className='font-normal'>My Account</p>
                        </p>
                        <hr />
                        <p className='flex items-center gap-3 p-3 hover:bg-gray-100'>
                            <BiStore className='text-orange-500' />
                            <p className='font-normal'>My Orders</p>
                        </p>
                        <hr />
                        <p className='flex items-center gap-3 p-3 hover:bg-gray-100'>
                            <BiStore className='text-orange-500' />
                            <p className='font-normal'>My Cart</p>
                        </p>
                        <hr />
                        <p className='flex items-center gap-3 p-3 hover:bg-gray-100'>
                            <BiStore className='text-orange-500' />
                            <p className='font-normal'>My Wishlist</p>
                        </p>
                        <hr />
                        <p className='flex items-center gap-3 p-3 bg-gray-200 hover:bg-gray-300'>
                            <BiLogOutCircle className='text-orange-500' />
                            <p className='font-normal'>Logout</p>
                        </p>
                    </div>

                </motion.div>

                {/* destop view */}
                <div className="relative hidden md:block">
                    <div className="absolute -top-6 w-full flex justify-center ">
                        <p className='w-9 h-6 bg-white' id='path'></p>
                    </div>
                    <div className="bg-white text-black w-60  rounded-sm flex flex-col  shadow-lg ">
                        <p className='flex items-center gap-3 p-3 hover:bg-gray-100'>
                            <CgProfile className='text-orange-500' />
                            <p className='font-normal'>My Profile</p>
                        </p>
                        <hr />
                        <p className='flex items-center gap-3 p-3 hover:bg-gray-100'>
                            <BiStore className='text-orange-500' />
                            <p className='font-normal'>Orders</p>
                        </p>
                        <hr />
                        <p className='flex items-center gap-3 p-3 bg-gray-200 hover:bg-gray-300'>
                            <BiLogOutCircle className='text-orange-500' />
                            <p className='font-normal'>Logout</p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User