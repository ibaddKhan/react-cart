import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';
import { removeFromCart } from '../../config/redux/reducers/mainArr';
import { nanoid } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const Cart = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);

  const handleRemoveFromCart = (index) => {
    Swal.fire({
      title: "Do you want to remove this item from the cart?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed");
        dispatch(removeFromCart(index));
      }
    });
  };

  return (
    <>
      <Navbar count={selector.length} />
      <div className='flex gap-10 mt-20 justify-center flex-wrap'>
        {selector.length === 0 ? (
          <p className="text-2xl mt-32 text-gray-600 dark:text-gray-300">No items added to the cart.</p>
        ) : (
          selector.map((item, index) => (
            <div key={nanoid()} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className='flex justify-center items-center'>
                <img src={item.image} className='object-contain h-[300px] card-image' alt={item.title} />
              </div>
              <h5 className="mb-2 text-2xl mt-5 font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <div className='flex justify-center'>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
