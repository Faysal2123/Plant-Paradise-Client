import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../../public/images/header-image-1.jpeg';
import banner1 from '../../../public/images/hori-3.png';
import banner2 from '../../../public/images/hori-4.jpg';

const Banner = () => {
    return (
        <div className='relative overflow-hidden'>
          
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img 
                    className='md:h-[500px] h-72 w-full object-cover md:blur-[2px] brightness-75' 
                    src={banner} 
                    alt="Banner Image" 
                />
            </motion.div>

            
            <div className='absolute top-1/2 transform -translate-y-1/2 px-4 rounded-lg w-full'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-2 p-4  rounded-lg'>
                   
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='md:w-2/3 w-full bg-opacity-30  backdrop-blur-md md:bg-opacity-100 md:backdrop-blur-none p-2 rounded-lg'
                    >
                        <h1 className='lg:text-5xl md:text-4xl text-2xl text-center md:text-start  font-extrabold  text-white drop-shadow-lg'>
                            Welcome to Plantzo – Your Green Paradise!
                        </h1>
                        <p className='md:text-base text-sm md:font-semibold text-white text-center md:text-start mt-4 drop-shadow-md lg:w-[900px]'>
                        Transform your space with our hand-picked plants, bringing freshness to every corner. Whether indoor or outdoor, find the perfect green touch for your home. Order now for doorstep delivery!
                        </p>
                    </motion.div>

              
                    <div className=' md:flex-row flex-col gap-2 mt-6 md:mt-0 hidden md:flex'>
                       
                        <motion.img 
                            className='h-[50px] w-[50px] md:h-[250px] md:w-[300px] rounded-lg mx-auto' 
                            src={banner1} 
                            alt="" 
                            animate={{ x: [-10, 50, -20] }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        />
                        
                        
                        <motion.img 
                            className='h-[50px] w-[50px] md:h-[250px] md:w-[300px] rounded-lg mx-auto' 
                            src={banner2} 
                            alt="" 
                            animate={{ y: [-20, 50, -30] }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
