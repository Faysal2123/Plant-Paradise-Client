import { div } from 'framer-motion/client';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PlantDetails = () => {
    const data = useLoaderData();
    const { title, image, description, quantity, price } = data;

    return (
       <div className='flex justify-center items-center pt-10 px-2'>
         <div className=" max-w-2xl rounded overflow-hidden shadow-lg bg-white p-5">
            <img className="w-full h-64 object-cover" src={image} alt={title} />
            <div className="py-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
            <div className="py-2 px-4 bg-gray-100 rounded-b-lg">
                <div className='flex justify-between'>
                <div>
                <p className="text-lg font-semibold text-gray-700">Price: ${price}</p>
                </div>
                <p className="text-lg font-semibold text-gray-700">Quantity: {quantity}</p>
                </div>
                 <div className='w-full pt-2'>
                 <button className='btn btn-warning w-full'>Buy Now</button>
                 </div>
            </div>
        </div>
       </div>
    );
};

export default PlantDetails;
