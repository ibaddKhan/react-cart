import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../config/redux/reducers/mainArr'; 
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ title, img, desc, price, index, array }) => {
    const dispatch = useDispatch();

    function handleAddToCart(index) {
        console.log(array, index);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to cart",
            showConfirmButton: false,
            timer: 1500
          });
        dispatch(addToCart({
            item: array,
        }));

    }

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center items-center'>
                <img src={img} className='object-contain h-[300px] card-image' alt={title} />
            </div>
            <h5 className="mb-2 text-2xl mt-5  font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}.</p>
            <h2 className="mb-3  text-white text-center">{price}</h2>
            <div className='flex justify-center items-end'>
                <p onClick={() => { handleAddToCart(index) }} className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to Cart
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </p>
            </div>
        </div>
    );
}

export default Card;
