import React from 'react';
import { Link } from 'react-router-dom'
export const Payment= () => {
  const toggleMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Payment Successful!');
    }
  };

  const validateForm = () => {
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billing-address').value;

    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Please enter a valid card number.');
      return false;
    }

    if (!cardHolder.trim()) {
      alert('Please enter the card holder name.');
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert('Please enter a valid expiry date in MM/YY format.');
      return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('Please enter a valid CVV.');
      return false;
    }

    if (!billingAddress.trim()) {
      alert('Please enter the billing address.');
      return false;
    }

    return true;
  };

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
    

      <section className=" h-[750px] bg-white p-5">
        <div className="container max-w-lg mx-auto p-5 ">
          <center>
            <h2 className="h text-3xl font-sans mb-4 text-5xl	">Pay Now</h2>
          </center>
          <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="card-number" className="mt-4">Card Number</label>
            <input type="text" id="card-number" placeholder="Enter card number" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="card-holder" className="mt-4">Card Holder Name</label>
            <input type="text" id="card-holder" placeholder="Enter card holder name" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="expiry" className="mt-4">Expiry Date</label>
            <input type="text" id="expiry" placeholder="MM/YY" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="cvv" className="mt-4">CVV</label>
            <input type="text" id="cvv" placeholder="Enter CVV" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="billing-address" className="mt-4">Address</label>
            <textarea id="billing-address" placeholder="Enter billing address" required className="p-2 mt-1 border border-gray-300 rounded"></textarea>
            
            <button type="submit" className="mt-6 p-2 bg-red-950	 text-white rounded hover:bg-blue-700">Pay Now</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4 ">
        <p>&copy; Follow us on Instagram</p>
        <p>
          <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-blue-400">@Desithreads</a>
        </p>
      </footer>
    </div>
  );
};