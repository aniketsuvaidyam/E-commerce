import React from 'react'
import { BsHeart } from "react-icons/bs";
import { Datas } from '../../data';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { IoFlash } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BsStarHalf, BsFillCaretLeftFill, BsStarFill, BsFillCaretRightFill } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const MainContainer = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 100 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>


            <div className='px-4 lg:px-24 pt-8 p-5 bg-[#f6f9fc]'>
                <div className='flex flex-col gap-3 relative'>
                    <div className="flex items-center gap-2">
                        <IoFlash className='text-xl text-yellow-400' />
                        <h1 className='text-2xl font-bold'>Flash Delas</h1>
                    </div>
                    <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}>


                        <div className="overflow-x-scroll scrollbar-none w-full ">
                            <div className="flex w-full gap-3 md:gap-6 pb-4">
                                {Datas && Datas.map(item => (
                                    <div key={item.id} className="w-1/6 z-20  min-w-[182px] md:w-1/5 md:min-w-[246px] flex flex-col justify-between  shadow-md p-3 rounded-md bg-white group">
                                        <div className="w-full flex justify-between">
                                            <div className="px-2 py-1 rounded-xl bg-yellow-400">
                                                <p className='text-xs font-bold text-white'>50% off</p>
                                            </div>
                                            <div className="hidden group-hover:block">
                                                <BsHeart className='cursor-pointer text-xl' />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center items-center mt-2 md:mt-8">
                                            <img className='w-1/2 ' src={item.img} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-end h-full ">
                                            <h2 className='font-medium'>{item.name}</h2>
                                        </div>
                                        <div className="flex gap-1">
                                            <BsStarFill className='text-xl text-red-500' />
                                            <BsStarFill className='text-xl text-red-500' />
                                            <BsStarFill className='text-xl text-red-500' />
                                            <BsStarHalf className='text-xl text-red-500' />
                                            <FaRegStar className='text-xl text-red-500' />
                                        </div>
                                        <div className="flex justify-between cursor-pointer">
                                            <p className='flex items-center text-md font-bold text-yellow-400'><BiRupee />{item.price}</p>
                                            <div className="p-1 border-2"> <MdAdd className='text-xl text-yellow-500' /></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Carousel>

                    <div className="flex w-full  justify-between absolute items-center h-full ">
                        <div className="group z-[100]">
                            <div className="w-8 h-24 rounded-r-xl bg-slate-50 group-hover:bg-yellow-400 
                        cursor-pointer  flex items-center justify-center">
                                <BsFillCaretLeftFill className='text-2xl text-gray-400 group-hover:text-gray-800' />
                            </div>
                        </div>
                        <div className="group z-[100]">
                            <div className="w-8 h-24 rounded-l-xl  bg-slate-50 group-hover:bg-yellow-400  cursor-pointer 
                        flex items-center justify-center">
                                <BsFillCaretRightFill className='text-2xl text-gray-300 group-hover:text-gray-800' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer