import React from 'react';
import { Link } from 'react-router-dom'

import silk from  './silk.jpg'
import alia from  './alia.jpg'
import skirt from  './skirt.jpg'

export const About = () => {
    return (
        
    <div className="bg-aliceblue min-h-screen font-sans">
      <div className="nav flex justify-between items-center px-10 py-5">
        <ul className="flex  absolute left-[30%] mt-16 gap-10">
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="product.html">Our Collections</a></li>
          <li><a href="sign.html">Sign in</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <h1 className="text-center absolute left-[40%]  text-3xl text-red-900 font-mono ">Desi Threads</h1>

      </div>
      <hr className="mx-15"/>
      <h2 className="text-center text-brown font-bold text-3xl mt-16">About Desi Threads</h2>
      <p className="text-center text-lg mx-10 my-5 font-serif">
        Desi Threads is born out of a fiercely creative spirit and a unique design sensibility. The brand Desi Threads is synonymous with luxury, traditional Indian craft and a distinct and refreshing design. Representing rooted culture and crafts of India and eclectic fusion through its ethnic wear collection is what explains Desi Threads’ design philosophy. The clothing fashion brand also has international attention and global appeal to its outfit designs.
      </p>
      <div className="flex justify-center">
        <img src={silk} alt="silk" className="w-72 mr-5" />
        <img src={alia} alt="alia" className="w-72 mx-5" />
        <img src={skirt} alt="skirt" className="w-72 ml-5" />
      </div>
      <p className="text-center text-lg mx-10 my-5 font-serif">
        Unusual textures, ‘fusion’ of styles, patchworks, ornate embroidery, and gorgeous embellishments on a diverse and vivid colour palette describe the ethnic and designer wear collection of Desi Threads and give the feeling of ‘going back to the roots. Overall, Desi Threads Fashion is all about the seamless confluence of ethnicity and femininity that allows the unique designs of the ethnic outfits to come alive on the wearer. Fashion consultants at Desi Threads help the brides with tailor-made lehengas, salwar kameez and designer cocktail gowns and offer an integrated and unique experience to the wearer. The story of Desi Threads’s remarkable presence is never-ending. So, we go on!
      </p>
      <footer className="bg-darkgrey p-5 mt-10">
        <div>
          <div>
            <h3 className="font-bold text-lg">Designer Wear</h3>
            <ul>
              <li>Lehangas</li>
              <li>Salwaar Kameez</li>
              <li>Sarees</li>
              <li>Gowns</li>
              <li>Indowestern Wears</li>
              <li>Saree Blouses</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Policies</h3>
            <ul>
              <li>Terms and Conditions</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Payment Policy</li>
              <li>FAQ's</li>
              <li>Customization Charges</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Safe and Secure Payment</h3>
            <div className="flex justify-around items-center">
              <i className="fab fa-cc-visa"></i>
              <i className="fas fa-truck"></i>
              <i className="fas fa-credit-card"></i>
              <i className="fab fa-google-pay"></i>
            </div>
            <h4 className="mt-3">Follow Us On:</h4>
            <div className="flex justify-around items-center">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-twitter"></i>
            </div>
            <p className="text-center">Instagram: @desithreads</p>
            <p className="text-center">Phone: 9876453290</p>
            <p className="text-center">Email: desithread@gmail.com</p>
          </div>
        </div>
      </footer>
      </div>
    
           
    );
};