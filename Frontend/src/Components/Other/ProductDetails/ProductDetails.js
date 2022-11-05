import React from 'react'
import { proImg } from '../../data'

const ProductDetails = () => {
    return (
        <>
            <div className='w-full h-screen px-2 md:px-16 bg-gray-100 '>
                <div className="w-full bg-white h-full flex flex-col md:flex-row">
                    {/* Product slider */}
                    <div className="w-full md:w-[400px]  p-2 h-full ">
                        <div className="w-full h-4/6 border-2 relative  flex flex-col justify-start items-center ">
                            <img className='w-3/4 mt-3' src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/2/k/8/-original-imagg8gjdphcbzuz.jpeg?q=70" alt="" />
                            <div className="absolute flex bottom-0 gap-1 h-[96px] overflow-x-scroll scrollbar-none   w-full">
                                {
                                    proImg.map(e => (
                                        <div key={e.id} className=" w-1/4 h-full border-2 flex justify-center min-w-[88px]">
                                            <img src={e.url} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Product details */}
                    <div className="w-full md:w-3/4 h-full bg-green-300">
                        d</div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails