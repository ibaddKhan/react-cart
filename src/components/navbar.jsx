import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 left-0  fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Budget Buy</h1>

        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/cart" className="text-white hover:underline">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
