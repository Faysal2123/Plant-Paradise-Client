import React from 'react';
import { FaLeaf, FaHandHoldingHeart, FaGlobe, FaSeedling, FaTruck } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className="w-11/12 mx-auto py-16">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                Discover the unique qualities that set us apart. From premium plants to eco-friendly practices and fast delivery, we ensure the best service and products for your garden!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mt-12">
                {/* Feature 1 */}
                <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-3xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaLeaf className="text-green-600 text-5xl mb-4 transform hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800">Premium Quality Plants</h3>
                    <p className="text-center text-gray-500 mt-4">
                        We carefully nurture each plant to ensure top-quality growth, so you can enjoy vibrant and healthy greenery.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-3xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaHandHoldingHeart className="text-green-600 text-5xl mb-4 transform hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800">Affordable Pricing</h3>
                    <p className="text-center text-gray-500 mt-4">
                        Enjoy the best prices for high-quality plants. Get more for less without compromising quality!
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-3xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaGlobe className="text-green-600 text-5xl mb-4 transform hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800">Eco-Friendly Practices</h3>
                    <p className="text-center text-gray-500 mt-4">
                        We prioritize sustainability with our eco-friendly and green practices to protect the environment.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-3xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaSeedling className="text-green-600 text-5xl mb-4 transform hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800">Expert Guidance</h3>
                    <p className="text-center text-gray-500 mt-4">
                        Receive expert advice from our team to ensure your plants thrive in any environment.
                    </p>
                </div>

                {/* Delivery Option */}
                <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-3xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaTruck className="text-green-600 text-5xl mb-4 transform hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
                    <p className="text-center text-gray-500 mt-4">
                        Get your plants delivered to your doorstep quickly and efficiently. Reliable delivery services, guaranteed!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
