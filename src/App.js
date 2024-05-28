
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './component/Home'
import { About } from './component/About'
import { Sign } from './component/Sign'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Sign' element={<Sign/>}></Route>



    </Routes>
    </BrowserRouter>
  );
}

export default App; 
