import React from 'react'
import { BsHeart } from "react-icons/bs";
import { Datas } from '../../data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}

            >
                <div className=' py-2 px-2 md:px-24 md:pt-8 md:p-5 bg-[#f6f9fc]'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>Flash Delas</h1>
                        <div className="flex w-full gap-2 md:gap-6">
                            {Datas && Datas.map(item => (
                                <div key={item.id} className="w-1/4 flex flex-col justify-between  shadow-md p-3 rounded-md bg-white group">
                                    <div className="flex justify-between">
                                        <div className="px-2 py-1 rounded-xl bg-yellow-400">
                                            <p className='text-xs font-bold text-white'>50% off</p>
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <BsHeart className='cursor-pointer text-xl' />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center ">
                                        <img className='w-20 md:w-36 md:h-36 h-28' src={item.img} alt="" />
                                    </div>
                                    <h2 className='font-medium'>{item.name}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default MainContainer