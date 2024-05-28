import React from 'react';
import { Link } from 'react-router-dom'


export const Product = () => {
    return (
        <div className="bg-aliceblue">

            <div className="flex justify-center items-center flex-col">
                <ul className="flex">
                    <li className="mx-4"><a href="home.html">Home</a></li>
                    <li className="mx-4"><a href="about.html">About Us</a></li>
                    <li className="mx-4"><a href="product.html">Our Collections</a></li>
                    <li className="mx-4"><a href="log.html">Sign in</a></li>
                    <li className="mx-4"><a href="contact.html">Contact Us</a></li>
                </ul>
                <h1 className="text-center">Desi Threads</h1>
                <hr />

                <section className="my-8" id="trending">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl capitalize">Our Trending<span className="text-brown">Collections</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <img src="./kur1.jpg" className="w-full h-auto mb-2" alt="Product" />
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
                     <h4 className="text-black text-sm">In stock:230</h4>
                        <p className="text-black text-lg font-medium">1230/-</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Buy Now</button>
                    </div>
                     </div>

                    </div>
                </section>
            </div>
        </div>
    );
}


