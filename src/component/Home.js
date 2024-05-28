import React from 'react';
import { Link } from 'react-router-dom'
import silk from  './silk.jpg'
import alia from  './alia.jpg'
import skirt from  './skirt.jpg'


export const Home = () => {
    return (
        <div className="bg-aliceblue">

            <div className="nav">
            <Link  to="/About" >About Us</Link>
            <Link to="/Product">Our Collections</Link>
            <Link to="/Sign">Sign In</Link>



                <h1 className="text-center text-5xl mb-4">Desi Threads</h1>
                <hr />

                <img  src={silk} alt="Styler" />


                <img src="./h1.jpg" alt="Image" width="350" height="410" className="mb-4" />
                <img src="./h3.jpg" alt="Image" width="350" height="310" id="i3" className="mb-4" />
                <div id="co">
                    <h1 id="ss" className="text-4xl text-darkred">Tailored Elegance For Every Occasion!!!</h1>
                    <p id="sss" className="text-xl italic">
                        Welcome to our vibrant world of ethnic wear, where tradition meets contemporary flair!
                        Dive into a kaleidoscope of colors, patterns, and textures that celebrate the rich cultural tapestry of India.
                        Discover the elegance of sarees, the timeless allure of salwar suits, the regal grace of lehengas,
                        and the sophistication of kurta sets. Each ensemble tells a story, weaving together centuries of heritage with modern trends,
                        to adorn you in unparalleled splendor. Welcome to "DESI THREADS!!"
                        <a href="product.html" id="hre" className="text-brown">Explore Now</a>
                    </p>
                </div>
                <div id="icon" className="mb-4">
                    <i className="fa-solid fa-truck text-5xl mr-16"></i>
                    <i className="fa-solid fa-rotate-left text-5xl mr-16"></i>
                    <i className="fa-solid fa-phone text-5xl mr-16"></i>
                    <i className="fa-solid fa-person-dress text-5xl"></i>
                </div>
                <div id="cap" className="mb-4">
                    <ul>
                        <li className="text-lg mr-16">Fast-Delivery</li>
                        <li className="text-lg mr-16">Easy-Return</li>
                        <li className="text-lg mr-16">24-Hours-Service</li>
                        <li className="text-lg">Custom-Fitting</li>
                    </ul>
                </div>
                <div className="picture grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                    <div className="row">
                        <img src="./w2.jpg" alt="Image" />
                        <h4 className="text-lg text-darkgreen ml-10">Must Have Best-Sellers</h4>
                    </div>
                    <div className="row">
                        <img src="./w3.jpg" alt="Image" />
                        <h4 className="text-lg text-darkgreen ml-10">Exclusive Bridal Collections</h4>
                    </div>
                    <div className="row">
                        <img src="./w4.jpg" alt="Image" />
                        <h4 className="text-lg text-darkgreen ml-10">New In May</h4>
                    </div>
                    <div className="row">
                        <img src="./w5.jpg" alt="Image" />
                        <h4 className="text-lg text-darkgreen ml-10">Online Exclusive</h4>
                    </div>
                </div>
            </div>

            <footer className="bg-darkgrey py-8">
                <div id="f1" className="ml-8">
                    <h3 className="text-xl font-bold mb-4">Designer Wear</h3>
                    <h4>Lehangas</h4>
                    <h4>Salwaar Kameez</h4>
                    <h4>Sarees</h4>
                    <h4>Gowns</h4>
                    <h4>Indowestern Wears</h4>
                    <h4>Saree Blouses</h4>
                </div>
                <div id="f2" className="ml-8">
                    <h3 className="text-xl font-bold mb-4">Policies</h3>
                    <h4>Terms and Conditions</h4>
                    <h4>Shipping</h4>
                    <h4>Returns</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Payment Policy</h4>
                    <h4>FAQ's</h4>
                    <h4>Customization Charges</h4>
                </div>
                <div id="f3" className="ml-8">
                    <h3 className="text-xl font-bold mb-4">Safe and Secure Payment</h3>
                    <i className="fa-brands fa-cc-visa text-3xl mr-6"></i>
                    <i className="fa-solid fa-truck text-3xl mr-6"></i>
                    <i className="fa-solid fa-credit-card text-3xl mr-6"></i>
                    <i className="fa-brands fa-google-pay text-3xl mr-6"></i>
                    <h4 className="mb-4">Follow Us On:</h4>
                    <i className="fa-brands fa-instagram text-3xl mr-6"></i>
                    <i className="fa-brands fa-facebook text-3xl mr-6"></i>
                    <i className="fa-brands fa-whatsapp text-3xl mr-6"></i>
                    <i className="fa-brands fa-x-twitter text-3xl"></i>
                    <h4 className="mb-4">Instagram:@desithreads</h4>
                    <h4>Phone:9876453290</h4>
                    <h4>Email:desithread@gmail.com </h4>
                </div>
            </footer>
        </div>
    );
}

