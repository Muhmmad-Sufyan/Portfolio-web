'use client'
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="relative flex items-center justify-between py-4">
                    <div className="flex items-center">
        <a href="/">
                        <h4 className="header rounded-lg bg-gray-800 text-white text-3xl font-bold py-4 px-6 transform hover:rotate-x-360 hover:scale-110 transition-transform duration-500 flex gap-x-2">
                            <img src="https://sufyan-j.netlify.app/el.png" className="w-10" /> Sufyan
                        </h4>
        </a>
                    </div>
                    <button
                        className="ml-4 md:hidden inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <nav className={`md:flex md:space-x-10  hidden`}>
                        <ul className="flex flex-col md:flex-row md:space-x-10">
                            <li>
                                <a href="/" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="contact" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {isOpen && (
                    <div className="flex flex-col md:hidden p-4 bg-gray-100 rounded-lg shadow-md">
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-base font-medium text-gray-700 hover:text-blue-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" className="text-base font-medium text-gray-700 hover:text-blue-500">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-base font-medium text-gray-700 hover:text-blue-500">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
