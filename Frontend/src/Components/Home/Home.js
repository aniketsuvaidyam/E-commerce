import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <Category />
      </div>
      <Footer />
    </>
  )
}

export default Home