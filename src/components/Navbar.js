import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-24 flex">
      <h4 className="text-xl flex text-gray-600 items-center justify-end ml-14 hover:text-black">M/M</h4>
      <div className="bg-white flex items-center justify-end p-12 ml-auto">
        <Link to="/" className="mx-4 text-gray-600 hover:text-black">Home</Link>
        <Link to="/profile" className="mx-4 text-gray-600 hover:text-black">Profile</Link>
        <Link to="/gallery" className="mx-4 text-gray-600 hover:text-black">Gallery</Link>
        <Link to="/booking" className="mx-4 text-gray-600 hover:text-black">Booking</Link>
        <Link to="/login" className="mx-4 text-gray-600 hover:text-black">Login</Link>
      </div>
    </div>
  );
}
