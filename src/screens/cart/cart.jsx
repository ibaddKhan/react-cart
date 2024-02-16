import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';
import { removeFromCart } from '../../config/redux/reducers/mainArr';
import { nanoid } from '@reduxjs/toolkit';

const Cart = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <>
      <Navbar count={selector.length} />
      <div className='flex gap-10 mt-20 justify-center flex-wrap'>
        {selector.map((item, index) => (
          <div key={nanoid()} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center items-center'>
              <img src={item.image} className='object-contain h-[300px] card-image' alt={item.title} />
            </div>
            <h5 className="mb-2 text-2xl mt-5 font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <button onClick={() => handleRemoveFromCart(index)}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
