import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        What Our Customers Say
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {review.name}
                </h3>
                <div className="flex text-yellow-400">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default CustomerReviews;