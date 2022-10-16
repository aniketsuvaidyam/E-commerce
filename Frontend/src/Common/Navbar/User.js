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
                className="absolute top-0 z-[1000] w-3/4 h-screen pt-3 px-4 bg-gray-50 shadow-md">
                <div className="flex justify-between">
                    <MdClose className='text-2xl cursor-pointer' onClick={props.openMenu} />
                    <p className='text-xl font-semibold'>Rahul</p>
                    <div className="">
                        <CgProfile className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
                <div className="flex justify-center mt-5 text-2xl">User</div>

            </motion.div>
        </>
    )
}

export default User