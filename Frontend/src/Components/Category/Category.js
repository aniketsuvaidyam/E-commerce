import React, { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categoryData } from '../Cart/Product'
import { motion } from 'framer-motion'

const Category = () => {
  const [filter, setFilter] = useState('Top offers')
  console.log(categoryData)
  return (
    <>
      <div className="sm:w-full w-[94%] py-2 mx-auto md:px-8 px-4  flex items-center justify-start md:justify-center 
      md:gap-14 gap-8 overflow-x-scroll scrollbar-none overflow-x-hidden">
        {
          categoryData && categoryData.map(item => (
            <div key={item.id} className="group flex flex-col items-center  justify-center gap-2">
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={` w-14 md:w-[70px] ${filter === item.category ? 'bg-yellow-500' : 'bg-gray-50'} drop-shadow-lg flex items-center justify-center h-14 md:h-[70px] group-hover:bg-yellow-400
           rounded-full bg-gray-50 cursor-pointer`} onClick={() => setFilter(item.category)}>
                <IoFastFood className={`md:text-3xl text-xl ${filter === item.category ? 'text-gray-200' : 'text-yellow-400'}
                 text-yellow-400 group-hover:text-white`} />
              </motion.div>
              <p className='md:text-sm text-xs flex items-center justify-center font-semibold cursor-pointer'>{item.category}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Category