import React from 'react'
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { products } from './Product'

const Cart = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="fixed top-0 right-0 w-full md:w-[430px] h-screen bg-gray-100 drop-shadow-md
             flex flex-col z-[2000]">
        <div className="w-full flex items-center justify-between p-4">
          <motion.div whileTap={{ scale: 0.75 }} >
            <MdOutlineKeyboardBackspace className='text-gray-600 text-xl cursor-pointer' onClick={props.cart} />
          </motion.div>
          <p className='text-gray-600 text-lg font-semibold'>Cart</p>
          <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-200 rounded-md hover:shadow-md
                     cursor-pointer text-gray-600'>Clear<RiRefreshFill /></motion.p>
        </div>
        {/* //bottom section */}
        <div className="w-full h-full rounded-t-[2rem] flex flex-col bg-gray-700">
          {/* cart item section */}
          <div className="w-full h-[340px] md:h-1/2 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                     scrollbar-none">
            {/* cart item */}
            <div className="">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-2 bg-white my-2 px-4 rounded-xl">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageSrc}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <BiMinus className='cursor-pointer' />
                          <p className="text-gray-500">Qty {product.quantity}</p>
                          <BiPlus className='cursor-pointer' />

                          <div className="flex">
                            <motion.button
                              whileTap={{ scale: 0.75 }}
                              type="button"
                              className="font-medium  hover:text-indigo-500"
                            >
                              <MdDelete className='text-xl' />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* cart total section */}
          <div className="w-full flex-1 bg-gray-600 rounded-t-[2rem] flex flex-col items-center
                    justify-center px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className='text-gray-400 text-lg'>Sub Total</p>
              <p className='text-gray-400 text-lg'>$ 8.5</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className='text-gray-400 text-lg'>Delivery</p>
              <p className='text-gray-400 text-lg'>$ 2.5</p>
            </div>
            <div className="w-full border-b my-2 border-gray-100"></div>
            <div className="w-full flex items-center justify-between">
              <p className='text-gray-400 text-lg font-semibold'>Total</p>
              <p className='text-gray-400 text-lg font-semibold'>$ 11</p>
            </div>

            <motion.button whileTap={{ scale: 0.8 }} type='button'
              className='w-full p-2 rounded-full bg-yellow-400 text-gray-50 text-lg my-2 
               hover:shadow-lg '>
              Check Out
            </motion.button>

          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Cart