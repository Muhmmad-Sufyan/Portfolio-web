'use client';
import React, { useState } from 'react';
import { Footer, Header } from '../../../components';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsModalOpen(true); // Open the modal on form submission
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
    };

    const closeModal = () => setIsModalOpen(false); // Close the modal

    return (
        <div>
            <Header />
            <div className="bg-white">
                <header className="bg-green-700 text-white text-center py-12">
                    <h1 className="text-4xl font-bold mt-16">Contact Us</h1>
                </header>
                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold">Get In Touch</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        We are here to help you. Reach out to us via any of the following methods.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
                        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 className="text-xl font-bold">Contact us on WhatsApp</h3>
                            <p className="text-gray-700 mt-2">+92 343 417 6386</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 className="text-xl font-bold">Email Us</h3>
                            <p className="text-gray-700 mt-2">suf12.jutt@gmail.com</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 className="text-xl font-bold">Visit Us</h3>
                            <p className="text-gray-700 mt-2">Ehsas lab nearby Zaferwal</p>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-12 px-4">
                    <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
                    <form className="max-w-2xl mx-auto mt-8 space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 font-bold">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </div>

            <Footer />

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                        <p className="text-gray-700 mb-6">How would you like to contact us?</p>
                        <div className="flex justify-around">
                            <a
                                href="https://wa.me/923434176386"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsModalOpen(false)}
                                className="bg-green-700 block text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition"
                            >
                                WhatsApp
                            </a>
                        </div>
                        <button
                            onClick={closeModal}
                            className="mt-6 w-full bg-gray-700 text-white py-2 rounded-lg shadow hover:bg-gray-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
