import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({count}) => {
    return (
        <nav className="bg-blue-500 p-4 left-0  fixed w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-lg font-bold">Budget Buy</h1>

                <div className="space-x-4 flex ">
                    <Link to="/" className="text-white hover:underline">Home</Link>
                    <div className='flex justify center'>
                        <Link to="/cart" className="text-white hover:underline">
                            <FontAwesomeIcon icon={faCartShopping} className='text-2xl relative ml-2' />
                            <p className='absolute top-1 right-[2%] font-semibold z-10 text-red-600 '>0</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
