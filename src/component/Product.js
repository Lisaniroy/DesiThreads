import React from 'react';
import { Link } from 'react-router-dom'


import kur1 from  './kur1.jpg'
import kur2 from  './kur2.jpg'
import kur3 from  './kur3.jpg'
import kur4 from  './kur4.jpg'
import l1 from './l1.jpg'
import l2 from './l2.jpg'
import l3 from './l3.jpg'
import l6 from './l6.jpg'
import s1 from './s1.jpg'
import s3 from './s3.jpg'
import s5 from './s5.jpg'
import s6 from './s6.jpg'



  


export const Product = () => {
    
  

    return (
        <div className="bg-aliceblue">

        <div className="nav flex justify-center space-x-8 py-4 bg-lightgrey">
        <Link to="/Home" className="text-lg font-semibold absolute left-[64%] text-fuchsia-600	" >Home</Link>

          <Link to="/About" className="text-lg font-semibold absolute left-[67%] text-fuchsia-600	" >About Us</Link>
          <Link to="/Product" className="text-lg font-semibold absolute left-[75%] text-fuchsia-600	">Our Collections</Link>
          <Link to="/Sign" className="text-lg font-semibold absolute left-[85%] text-fuchsia-600	">Sign In</Link>
          <Link to="/Contact" className="text-lg font-semibold absolute left-[90%] text-fuchsia-600" >Contact Us</Link>

      </div>
      <div className="text-center py-6">
      <h1 className="text-5xl mb-4 text-rose-700">Desi Threads</h1>
      </div>

                <section className="my-8" id="trending">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl capitalize">Our Trending<span className="text-brown">Collections</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[50%]" >
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={kur1} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Long Green Gown</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:23</h4>
                        <p className="text-black text-lg font-medium">1230/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute left-[50%] bottom-[-6%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={kur2} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Violet Kurti Set</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:30</h4>
                        <p className="text-black text-lg font-medium">2230/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute left-[75%] bottom-[-5%] w-[50%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={kur3} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Grey Kurti Set</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:15</h4>
                        <p className="text-black text-lg font-medium">2049/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%] absolute left-[25%] bottom-[-5%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={kur4} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Pink Anarkali </h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:20</h4>
                        <p className="text-black text-lg font-medium">2889/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[53%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={l1} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Mustard Skirt Set</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:20</h4>
                        <p className="text-black text-lg font-medium">2690/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute left-[50%] bottom-[-90%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={l2} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Floral Pink Lehanga</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:12</h4>
                        <p className="text-black text-lg font-medium">3020/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%] absolute bottom-[-90%] left-[25%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={l3} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Blue Lehanga</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:21</h4>
                        <p className="text-black text-lg font-medium">1230/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%] absolute left-[75%] bottom-[-90%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={l6} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Floral Skirt Set</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:23</h4>
                        <p className="text-black text-lg font-medium">1890/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                     </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%] absolute left-[75%] bottom-[-170%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={s3} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Blue Organza Saree</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:10</h4>
                        <p className="text-black text-lg font-medium">3450/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

        
                    </div>
                     </div>

                     </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={s1} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">White Silk Saree</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:20</h4>
                        <p className="text-black text-lg font-medium">1890/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>

                     </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%] absolute left-[50%] bottom-[-170%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={s5} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Yellow Organza Saree</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:17</h4>
                        <p className="text-black text-lg font-medium">2960/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    </div>
                     </div>

                     </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50%] absolute left-[25%] bottom-[-173%]">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={s6} className="w-full h-auto mb-2" alt="Product" />
                    <div className="bg-green text-white text-xs font-medium uppercase px-2 py-1 rounded">
                     Sale
                    </div>
                    <div className="mt-2">
                    <h4 className="text-black text-lg font-medium">Green Saree-Thin Border</h4>
                    <form>
                     <label>Quantity</label>
                    <input type="number" className="border border-gray-300 rounded-md px-2 py-1 mt-1" />
                    </form>
                    </div>
                    <div className="mt-2">
                     <h4 className="text-black text-sm">In stock:14</h4>
                        <p className="text-black text-lg font-medium">2350/-</p>
                        <Link to="/Payment" className="text-lg font-semibold   inline-block mt-2 bg-red-300 text-black py-1 px-2 rounded	" >Buy Now</Link>

                    
                    </div>
                     </div>



                    </div>

                    
                </section>
        
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
}


