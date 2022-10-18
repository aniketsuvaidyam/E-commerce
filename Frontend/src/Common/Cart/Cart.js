import React from 'react'
import { MdDelete, MdKeyboardBackspace, MdLocalGroceryStore } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus, BiRupee, BiCloudDownload } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Del } from '../../State/Action/action'

const Cart = (props) => {

  const items = useSelector((state) => state.cartReducer.carts)

  const dispatch = useDispatch()

  const delitem = (id) => {
    dispatch(Del(id))
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="fixed top-0 right-0 w-full md:w-[430px] h-screen bg-orange-500 drop-shadow-md
             flex flex-col z-[2000]">
        <div className="w-full flex items-center justify-between px-4 py-[13px]">
          <motion.div whileTap={{ scale: 0.75 }} >
            <MdKeyboardBackspace className='text-white text-2xl  cursor-pointer' onClick={props.cart} />
          </motion.div>
          <p className='text-white text-lg font-semibold'>Cart</p>
          <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-yellow-400 rounded-md hover:shadow-md
                     cursor-pointer text-white'>Clear<RiRefreshFill /></motion.p>
        </div>
        {/* //bottom section */}
        <div className="w-full h-full  flex flex-col bg-gray-200">

          {/* cart item section */}
          <div className="w-full h-[350px] md:h-2/3 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                     scrollbar-none">
            {/* empty cart */}
            {items.length === 0 ? <div className="w-full h-full flex flex-col items-center justify-center">
              <BiCloudDownload className='text-gray-600' />
              <MdLocalGroceryStore className='text-4xl text-gray-600' />
              <p className='text-2xl font-medium'>Your Cart is Empty !</p>
              <p className=''>Add items to it now.</p>
              <button className='px-6 py-1 mt-3 text-white font-medium bg-yellow-400 rounded-sm shadow-md' onClick={props.cart}>Shop Now</button>
            </div> :
              <div className="">
                {/* cart */}
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((product) => (
                      <li key={product.id} className="flex py-2 bg-white my-2 px-4 rounded-xl">
                        <div className="w-32 h-28 flex justify-center ">
                          <img
                            src={product.img}
                            alt={product.imageSrc}
                            className="h-full   object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product.href}>{product.name}</a>
                              </h3>
                              <p className="ml-4 flex items-center"><BiRupee /> {product.price}</p>
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
                                <MdDelete className='text-xl' onClick={() => delitem(product.id)} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>}
            {/* cart item */}

          </div>
          {/* cart total section */}
          <div className="w-full flex-1 bg-orange-500 rounded-t-[2rem] flex flex-col items-center
                    justify-center px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className='text-white text-lg'>Sub Total</p>
              <p className='text-white text-lg flex items-center'><BiRupee /> 8.5</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className='text-white text-lg'>Delivery</p>
              <p className='text-white text-lg flex items-center'><BiRupee /> 2.5</p>
            </div>
            <div className="w-full border-b my-2 border-gray-100"></div>
            <div className="w-full flex items-center justify-between">
              <p className='text-white text-lg font-semibold'>Total</p>
              <p className='text-white text-lg font-semibold flex items-center'><BiRupee /> 11</p>
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