import React from 'react'
import { BsHeart } from "react-icons/bs";

const MainContainer = () => {
    return (
        <>
            <div className='px-24 pt-8 p-5 bg-[#f6f9fc]'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>Flash Delas</h1>
                    <div className="overflow-x-scroll">
                        <div className="flex w-full gap-6">
                            <div className="w-1/4 shadow-md p-3 rounded-md bg-white group">
                                <div className="flex justify-between">
                                    <div className="px-2 py-1 rounded-xl bg-yellow-400">
                                        <p className='text-xs font-bold text-white'>50% off</p>
                                    </div>
                                    <div className="hidden group-hover:block">
                                        <BsHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer