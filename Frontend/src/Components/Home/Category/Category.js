import React from 'react'
import { navData } from '../../data'


const Category = () => {

  return (
    <>
      <div className='flex md:justify-around  justify-start overflow-scroll md:px-12  px-3  md:overflow-hidden py-3 md:items-center'>
        {
          navData.map((data) => {
            return (

              <div className='ml-6 md:ml-0'>
                <img className='md:h-16 h-12 w-12 md:w-16' src={data.url} alt="" />
                <p>{data.text}</p>
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