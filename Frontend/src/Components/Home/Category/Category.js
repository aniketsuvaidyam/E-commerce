import React from 'react'
import { navData } from '../../data'


const Category = () => {

  return (
    <>
      <div className='flex md:justify-around  justify-start overflow-x-scroll md:px-12 scrollbar-none px-3  md:overflow-x-hidden py-3 md:items-center'>
        {
          navData.map((data) => {
            return (

              <div className='ml-6 md:ml-0 cursor-pointer'>
                <img className='md:h-16 h-12 w-12 md:w-16' src={data.url} alt="" />
                <p className='text-xs font-semibold md:text-base md:font-medium'>{data.text}</p>
              </div>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default Category