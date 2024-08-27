import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" h-[10vh] flex items-center justify-between  px-6 relative">
      <Link to="/" className="text-2xl text-gray-600 hover:text-black">
        M/M
      </Link>
      <div className="hidden md:flex space-x-[4vw] mr-[25vw]">
        <Link to="/profile" className="text-lg text-gray-600 hover:text-black">
          Profile
        </Link>
        <Link to="/gallery" className="text-lg text-gray-600 hover:text-black">
          Gallery
        </Link>
        <Link to="/booking" className="text-lg text-gray-600 hover:text-black">
          Booking
        </Link>
        <Link to="/login" className="text-lg text-gray-600 hover:text-black">
          Login
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMenu} 
          className="text-gray-600 focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <FaBars size={24} />
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`absolute top-[10vh] right-0 min-h-[92vh] w-[30vw] bg-[black] flex flex-col justify-center items-center px-6 space-y-4 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/profile" className="text-lg text-gray-600 hover:text-black" onClick={toggleMenu}>
          Profile
        </Link>
        <Link to="/gallery" className="text-lg text-gray-600 hover:text-black" onClick={toggleMenu}>
          Gallery
        </Link>
        <Link to="/booking" className="text-lg text-gray-600 hover:text-black" onClick={toggleMenu}>
          Booking
        </Link>
        <Link to="/login" className="text-lg text-gray-600 hover:text-black" onClick={toggleMenu}>
          Login
        </Link>
      </div>
    </nav>
  );
}
