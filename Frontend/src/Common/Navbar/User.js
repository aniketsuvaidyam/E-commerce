import React from 'react'
import { motion } from 'framer-motion'
import { CgProfile } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const User = (props) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                className="absolute top-0 z-[1000] w-3/4 h-screen   bg-gray-50 shadow-md">
                <div className="flex justify-between w-full px-4 py-3.5 bg-orange-500">
                    <MdClose className='w-7 h-7 cursor-pointer text-white' onClick={props.openMenu} />
                    <p className='text-xl font-semibold text-white'>Rahul</p>
                    <div className="">
                        <CgProfile className='w-7 h-7 cursor-pointer text-white' />
                    </div>
                </div>
                <div className="flex justify-center mt-5 text-2xl">User</div>

            </motion.div>
        </>
    )
}

export default User