import React from 'react'

const MainContainer = () => {
    return (
        <>
            <div className='px-4 w-full py-6 '>
                <div className='mx-4 flex-none md:flex'>
                    <div className="w-full  md:w-1/2 relative  border-b-2">
                        <p className='absolute -top-4 font-medium text-xl bg-white'>Top Products</p>
                    </div>
                    <div className="w-full md:mt-0 mt-8  md:w-1/2 relative  border-b-2">
                        <p className='absolute -top-4 font-medium text-xl bg-white'>Top Brands</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer