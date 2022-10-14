import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'
import MainContainer from '../MainContainer/MainContainer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Category />
      <MainContainer />
      <Footer />
    </>
  )
}

export default Home