import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, img, desc, price }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className='flex justify-center items-center'>
<img src={img}  className='object-contain h-[300px] card-image' alt={title} />

</div>
            <h5 className="mb-2 text-2xl mt-5  font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{desc}.</p>
            <h3 className='my-3 text-white text-center'>Price ${price}</h3>
            <p className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to Cart
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </p>
        </div>
    );
}

export default Card;
