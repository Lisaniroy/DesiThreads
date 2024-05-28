import React from 'react';
import { Link } from 'react-router-dom'

export const Sign = () => {
    return (
        <div className="bg-aliceblue min-h-screen font-sans">
        <div className="nav flex justify-between items-center px-10 py-5">
          <div className="flex  absolute left-[30%] mt-16 gap-10">
             <Link  to="/About" >About Us</Link>
            <Link to="/Product">Our Collections</Link>

          </div>
          <h1 className="text-center absolute left-[40%]  text-3xl text-red-900 font-mono ">Desi Threads</h1>
  
        </div>
        </div>
    );
}