import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Plants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/plants")
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Plants</h1>
            <div className="w-11/12 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {plants.slice(0, 8).map(plant => (
                    <div key={plant._id} className="relative bg-white shadow-md rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <img src={plant.image} alt={plant.title} className="w-full h-56 object-cover"/>
                        <div className="p-5">
                            <h2 className="text-xl font-semibold text-gray-800">{plant.title}</h2>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{plant.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-semibold text-green-600">${plant.price}</span>
                                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-700">Stock: {plant.quantity} </span>
                            </div>
                        </div>
                        <Link to={`/plant/${plant._id}`}  className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">Buy Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plants;
