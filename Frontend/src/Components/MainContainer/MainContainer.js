import React from 'react'

const MainContainer = () => {
    return (
        <>
            <div className='px-4 w-full py-6 '>
                <div className=' flex-none lg:flex'>
                    <div className="w-full  lg:w-1/2  flex flex-col">
                        <div className="w-full relative  border-b-2">
                            <p className='absolute -top-4 font-medium text-xl bg-white'>Top Products</p>
                        </div>
                        <div className="py-14 w-full lg:w-[98%] bg-blue-400 mt-6 "></div>
                    </div>
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <div className="w-full lg:mt-0 mt-8   relative  border-b-2">
                            <p className='absolute -top-4 font-medium text-xl bg-white'>Top Brands</p>
                        </div>
                        <div className="py-14 w-full bg-blue-400 mt-6 "></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer