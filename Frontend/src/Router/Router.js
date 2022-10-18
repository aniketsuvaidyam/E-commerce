import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Components/Home/Home';
import ProductDetails from '../Components/Other/ProductDetails/ProductDetails';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router