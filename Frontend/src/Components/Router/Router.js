import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Home/Home';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
           <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router