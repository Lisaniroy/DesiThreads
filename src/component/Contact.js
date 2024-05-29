import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom'
export const Contact= () =>
   {
  const navigate = useNavigate();

  const handleSubmit = (event) => 
    {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const message = event.target.message.value;

    if (!username || !password || !message)
       {
      alert('Please fill in all fields.');
      return;
    }

    // Redirect to the home page after successful submission
    navigate('/Home');
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
        <form id="contactForm" className=" h-[650px]  p-5" onSubmit={handleSubmit}>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td className="p-2 mt-10 text-blue-800"><h3>Username or email*</h3></td>
                <td className="p-2 mt-10"><h3><input type="text" name="username" placeholder="Username or email required" className=" p-2 border border-gray-300 rounded" /></h3></td>
              </tr>
              <tr>
                <td className="p-2 mt-10 text-blue-800"><h3>Password*</h3></td>
                <td className="p-2 mt-10"><h3><input type="password" name="password" placeholder="Password required" className="p-2 border border-gray-300 rounded mt-10" /></h3></td>
              </tr>
              <tr>
                <td className="p-2 mt-10 text-blue-800"><h3>Your Message</h3></td>
                <td className="p-2 mt-10"><h3><input type="text" name="message" placeholder="Type your message" className="p-2 border border-gray-300 rounded w-full mt-10" style={{ height: '100px' }} /></h3></td>
              </tr>
            </tbody>
          </table>
          <button id="btn1" className="mt-10 absolute right-[50%] px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">SUBMIT</button>
        </form>
        <footer className="bg-red-700 text-black text-center p-4 fixed bottom-0 w-full">
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
