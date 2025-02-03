import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="bg-[#f3f4f6] md:min-h-screen flex flex-col items-center justify-center md:py-10 px-2 py-5">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-t-4 border-[#228B22]">
                <h2 className="text-3xl font-extrabold text-center text-[#2e8b57] mb-6">Contact Us</h2>
                <p className="text-center text-[#4B4B4B] text-lg mb-6">We'd love to hear from you! Please send us your feedback or inquiries.</p>

                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center space-x-2 text-[#4B4B4B] mb-3">
                        <FaPhoneAlt className="text-[#228B22]" />
                        <span>+1 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#4B4B4B]">
                        <FaEnvelope className="text-[#228B22]" />
                        <span>contact@treesales.com</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#4B4B4B]">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#4B4B4B]">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#4B4B4B]">Your Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                            rows="5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#228B22] text-white font-semibold rounded-md hover:bg-[#006400] focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
