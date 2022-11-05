import { brands } from '../../data';
import React from 'react'
import { TbBrandAirtable } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { MdShoppingBasket } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { Add } from '../../../State/Action/action'

const Brand = () => {

    const dispatch = useDispatch()
    const SetToCart = (e) => {
        dispatch(Add(e))
    }
    const brand = [
        { id: 1, Brand: 'levis' },
        { id: 2, Brand: 'levis' },
        { id: 3, Brand: 'levis' },
        { id: 4, Brand: 'levis' },
        { id: 5, Brand: 'levis' },
        { id: 6, Brand: 'levis' },
        { id: 7, Brand: 'flying' },
        { id: 8, Brand: 'flying' },
        { id: 9, Brand: 'flying' },
        { id: 10, Brand: 'flying' },
        { id: 11, Brand: 'flying' },
        { id: 12, Brand: 'flying' },
    ]
    return (
        <>
            <div className="w-full">
                <div className="w-full px-4 md:px-12 pt-6">
                    <div className="w-full flex flex-col gap-4">
                        <h1 className=' text-2xl font-bold flex items-center gap-2'><TbBrandAirtable className='text-green-400' /> All Brands</h1>
                        <div className=" flex gap-2 md:gap-4 overflow-x-scroll scrollbar-none">
                            {
                                brand.map(e => (
                                    <div key={e.id} className=" h-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 cursor-pointer
                                    flex items-center justify-center hover:bg-orange-100 hover:text-gray-600 py-3.5 px-6 text-gray-400 font-semibold">{e.Brand}</div>
                                ))
                            }

                        </div>
                        <div className="flex flex-wrap justify-center md:justify-items-stretch w-full gap-3 pb-4">
                            {brands && brands.map(item => (
                                <div key={item.id} className=" w-[15.8%] md:min-w-[220px] min-w-[170px] flex flex-col justify-between  shadow-md  rounded-md bg-white group">
                                    <div className="w-full z-20  px-2 pt-2 flex justify-between">
                                        <div className="px-2 py-1 rounded-xl bg-yellow-400">
                                            <p className='text-xs font-bold text-white'>50% off</p>
                                        </div>
                                        <motion.div whileTap={{ scale: 0.75 }} className="hidden group-hover:block">
                                            <BsHeart className='cursor-pointer font-bold text-orange-500 text-xl' />
                                        </motion.div>
                                    </div>
                                    <Link to={`/ProductDetails/${item.id}`} className="w-full flex flex-col justify-center items-center ">
                                        <img className='w-full -mt-7' src={item.img} alt="" />
                                    </Link>
                                    <div className='px-2 pb-2 flex flex-col justify-end'>
                                        <div className=" h-full ">
                                            <h2 className='font-medium'>{item.name}</h2>
                                        </div>
                                        <div className="flex gap-1">
                                            <BsStarFill className='text-xl text-orange-500' />
                                            <BsStarFill className='text-xl text-orange-500' />
                                            <BsStarFill className='text-xl text-orange-500' />
                                            <BsStarHalf className='text-xl text-orange-500' />
                                            <FaRegStar className='text-xl text-orange-500' />
                                        </div>
                                        <div className="flex justify-between ">
                                            <p className='flex items-center text-md font-bold text-orange-500'><BiRupee />{item.price}</p>
                                            <motion.div whileTap={{ scale: 0.75 }} className=" cursor-pointer " onClick={() => SetToCart(item)}>
                                                <MdShoppingBasket className='text-2xl text-orange-500' /></motion.div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand