import React from 'react';
import { Link } from 'react-router-dom';
import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpg';
import w2 from './w2.jpg';
import w3 from './w3.jpg';
import w4 from './w4.jpg';
import w5 from './w5.jpg';





export const Home = () => {
    return (
        <div className="bg-aliceblue">
            <div className="nav flex justify-center space-x-8 py-4 bg-lightgrey">
            <Link to="/Home" className="text-lg font-semibold absolute left-[64%] text-fuchsia-600	" >Home</Link>
            <Link to="/About" className="text-lg font-semibold absolute left-[67%] text-fuchsia-600	" >About Us</Link>
            <Link to="/Product" className="text-lg font-semibold absolute left-[75%] text-fuchsia-600	">Our Collections</Link>
            <Link to="/Sign" className="text-lg font-semibold absolute left-[85%] text-fuchsia-600	">Sign In</Link>
            <Link to="/Contact" className="text-lg font-semibold absolute left-[90%] text-fuchsia-600	" >Contact Us</Link>

            </div>

            <div className="text-center py-6">
                <h1 className="text-5xl mb-4 text-rose-700">Desi Threads</h1>
                <hr className="border-2 border-gray-300 mb-4" />
            </div>

            <div className="flex justify-center space-x-4 mb-8">
                <img src={h1} alt="Styler" className="w-1/2" />
                <img src={h2} alt="Styler" className="w-1/2" />
                <img src={h3} alt="Styler" className="w-1/2" />
            </div>

            <div className="text-center mb-8 px-8">
                <h1 className="text-4xl text-darkred mb-4 text-lime-600	">Tailored Elegance For Every Occasion!!!</h1>
                <p className="text-xl italic">
                    Welcome to our vibrant world of ethnic wear, where tradition meets contemporary flair!
                    Dive into a kaleidoscope of colors, patterns, and textures that celebrate the rich cultural tapestry of India.
                    Discover the elegance of sarees, the timeless allure of salwar suits, the regal grace of lehengas,
                    and the sophistication of kurta sets. Each ensemble tells a story, weaving together centuries of heritage with modern trends,
                    to adorn you in unparalleled splendor. Welcome to "DESI THREADS!!"
                    <Link to="/Product" className="text-brown ml-2">Explore Now</Link>
                </p>
            </div>

            <div className="text-center mb-8">
                <div className="flex justify-center space-x-16 text-5xl mb-4">
                    <i className="fa-solid fa-truck"></i>
                    <i className="fa-solid fa-rotate-left"></i>
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-person-dress"></i>
                </div>
                <ul className="flex justify-center space-x-16 mt-4 text-lg">
                    <li>*Fast-Delivery*</li>
                    <li>*Easy-Return*</li>
                    <li>*24-Hours-Service*</li>
                    <li>*Custom-Fitting*</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-8">
                <div classname="relative">
                    <img src={w2} altStyler="" className="w-[70%]" />
                    <h2 className="font-serif text-lg mt-6 text-rose-800">Best Sellers</h2>
                </div>
                <div classname="relative">

                    <img src={w3} altStyler="" className="w-[70%]" />
                    <h2 className="font-serif text-lg mt-6 text-rose-800">Bridal Collections</h2>
                </div>
                <div classname="relative">

                    <img src={w4} altStyler="" className="w-[70%]" />
                    <h2 className="font-serif text-lg mt-6 text-rose-800">New In May</h2>
                </div>
                <div classname="relative">

                    <img src={w5} altStyler="" className="w-[70%]" />
                    <h2 className="font-serif text-lg mt-6 text-rose-800">Summer Exclusives</h2>
                </div>




            
            </div>

            <footer className="bg-red-700 text-black  text-center p-4 ">
        <p>&copy; follow us on Instagram</p>
        <p>
          <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">
            @Desithreads
          </a>
        </p>
      </footer>

        </div>
    );
};