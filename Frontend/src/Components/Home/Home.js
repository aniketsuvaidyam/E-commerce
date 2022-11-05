import React from 'react'
import Brand from './Brand/Brand'
import Slider from './Carousel/Slider'
import Category from './Category/Category'
import MainContainer from './MainContainer/MainContainer'


const Home = () => {
  return (
    <>
      <Slider />
      <Category />
      <MainContainer />
      <Brand />
    </>
  )
}

export default Home