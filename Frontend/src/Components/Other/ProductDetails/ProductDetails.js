import React from 'react'
import { BiRupee } from 'react-icons/bi'

const ProductDetails = () => {
    return (
        <>
            <div className='px-4 md:flex flex-none'>
                <div className="w-full overflow-x-scroll  flex-row md:w-1/4 flex md:flex-col gap-4 md:overflow-y-scroll overflow-y-hidden  h-full max-h-[800px] scrollbar-none  p-3">
                    <div className="min-w-full md:w-auto flex items-center justify-center">
                        <img className='w-full' src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/t/o/p/-original-imaghypjkz7zq9zu.jpeg?q=70" alt="" />
                    </div>
                    <div className="min-w-full md:w-auto flex items-center justify-center">
                        <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/t/o/p/-original-imaghypjkz7zq9zu.jpeg?q=70" alt="" />
                    </div>
                    <div className="min-w-full md:w-auto flex items-center justify-center">
                        <img className='w-full' src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/q/z/q/-original-imaghypjj79zgguv.jpeg?q=70" alt="" />
                    </div>
                    <div className="min-w-full md:w-auto flex items-center justify-center">
                        <img className='w-full' src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/l/o/s/-original-imaghypjjmphaj2p.jpeg?q=70" alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-2 md:pt-8 flex flex-col gap-4">
                    <p className='md:text-3xl font-semibold text-xl'>Noise ColorFit Vision 2 Buzz Smartwatch  (Black Strap, Regular)</p>
                    <p className='bg-blue-500 w-32 flex items-center justify-center rounded-2xl py-1 text-white cursor-pointer
                    '>Ready to ship</p>
                    <hr />
                    <div className='flex flex-col gap-2'>
                        <p className='text-xl font-semibold text-blue-500'>Special price</p>
                        <div className="flex items-end gap-2">
                            <div className='flex items-end'>
                                <BiRupee className='text-4xl font-semibold' />
                                <p className='text-3xl font-semibold'>1499</p>
                            </div>
                            <del className="flex items-end ">
                                <BiRupee className='text-2xl ' />
                                <p className='text-xl '>2999</p>
                            </del>
                            <div className='flex items-center'>
                                <p className='font-semibold text-blue-500'>50% off</p>
                            </div>
                        </div>
                        <hr />
                        <div className="">
                            <p className='text-xl font-semibold'>About</p>
                            <p className='font-medium pl-4'>A complete feeding set</p>
                            <p className='font-medium pl-4'>Made of bamboo fiber natural material which is very safe</p>
                            <p className='font-medium pl-4'>Made of high quality material that provides toughness and durability</p>
                        </div>
                        <hr />
                        <div className="">
                            <h1 className='text-xl font-semibold'>Product details</h1>
                            <div className="pl-4">
                                <p className='font-medium text-gray-600'>Brand : <span className='font-semibold text-black'>Noise</span></p>
                                <p className='font-medium text-gray-600'>Battery Life : <span className='font-semibold text-black'>7 Days</span></p>
                                <p className='font-medium text-gray-600'>Notification : <span className='font-semibold text-black'>Smart Notification</span></p>
                                <p className='font-medium text-gray-600'>Notification Type : <span className='font-semibold text-black'>Vibration</span></p>
                                <p className='font-medium text-gray-600'>Rechargeable Battery : <span className='font-semibold text-black'>Yes</span></p>
                                <p className='font-medium text-gray-600'>Sensor : <span className='font-semibold text-black'>Heart Rate, SpO2</span></p>
                                <p className='font-medium text-gray-600'>Charger Type : <span className='font-semibold text-black'>Magnetic Charger</span></p>
                            </div>
                        </div>
                        <hr />
                        <div className="">
                            <p className='text-xl font-semibold'>Stock dimensions</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4"></div>

            </div>
        </>
    )
}

export default ProductDetails