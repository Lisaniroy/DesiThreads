
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './component/Home'
import { About } from './component/About'
import { Product} from './component/Product'
import { Sign } from './component/Sign'
import { Contact } from './component/Contact'

import {Payment} from './component/Payment'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Product' element={<Product/>}></Route>
      <Route path='Sign' element={<Sign/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>

      <Route path='Payment' element={<Payment/>}></Route>



    </Routes>
    </BrowserRouter>
  );
}

export default App; 
