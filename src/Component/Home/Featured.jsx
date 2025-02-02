import React from 'react';
import img1 from '../../../public/images/hori-3.png';
import img2 from '../../../public/images/hori-1.jpeg'
import img3 from '../../../public/images/hori-2.jpg'
import { FaArrowRight } from 'react-icons/fa';

const Featured = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse justify-between w-11/12 mx-auto md:gap-20 pt-6 md:pt-14 pb-10 '>
            <div className='p-8 bg-gradient-to-r from-[#3eb489] to-[#1e805d] rounded-2xl relative'>
               <div >
               <img className='md:h-[450px] md:w-[500px] h-[300px] w-[400px] rounded-2xl' src={img1} alt="" />
               </div>
                <div className='flex justify-center items-center absolute lg:right-36 lg:top-[420px] right-20 top-72'>
                <div className='w-40 flex justify-center items-center bg-gray-500 rounded-2xl'>
                   
                   <h1 className='text-4xl font-bold text-center px-20 py-7   md:px-36 md:py-10 text-white'>450+</h1>
                  
                </div>
                </div>
            </div>
            <div className='space-y-5'>
                <h1 className='md:text-4xl text-2xl font-bold text-center md:text-start'>Find your perfect tree today and bring nature closer to your life!</h1>
                <p className='md:text-base text-sm mt-4 md:w-[900px] text-gray-700 text-center md:text-start'>
                    Explore our handpicked collection of the most beautiful and healthy trees for your home and garden. Whether you're looking for fruit-bearing trees, decorative plants, or air-purifying greens, we have the perfect options for you. Each plant is carefully nurtured to ensure the best quality and growth.
                </p>
               <div className='mt-2'>
               <div className='flex justify-center md:justify-start'>
               <button className='btn btn-outline  btn-warning px-11 text-lg gap-5'>Learn More <span><FaArrowRight /></span></button>
               </div>
               <div className='ml-3 flex md:gap-40 gap-2 md:pt-10 pt-8 pb-7'>
                 <div className='space-y-2 '>
                   <img className='md:h-40 h-20 w-20 md:w-48 rounded-2xl' src={img2} alt="" />
                   <h1 className='md:text-2xl text-lg font-semibold'>Outdoor Plants</h1>
                   <p className='text-gray-700 text-sm'> Perfect for balconies, patios, and gardens. These plants thrive in sunlight and enhance your outdoor space.</p>
                 </div>
                 <div className='space-y-2'>
                <img className='md:h-40 h-20 w-20 md:w-48 rounded-2xl' src={img3} alt="" />
                <h1 className='md:text-2xl text-lg font-semibold'>Landscape Plants</h1>
                <p className='text-gray-700 text-sm'>Ideal for creating stunning landscapes. These plants add beauty and structure to your garden or backyard.</p>
                 </div>
               </div>
              
               </div>
            </div>
        </div>
    );
};

export default Featured;
