import React from 'react';
import { Link } from 'react-router-dom'

import silk from  './silk.jpg'
import alia from  './alia.jpg'
import skirt from  './skirt.jpg'

export const About = () => {
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


      
      <hr className="mx-15"/>
      <h2 className="text-center text-brown font-bold text-3xl mt-16 text-green-700">About Desi Threads</h2>
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