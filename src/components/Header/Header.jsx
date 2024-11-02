// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Create this file if you want to style the header separately

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Event handler to close the menu when clicking outside
    const handleOutsideClick = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setMobileMenuOpen(false);
        }
    };

    // Adding/removing event listener to detect outside clicks
    useEffect(() => {
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [mobileMenuOpen]);

    return (
        <nav className="p-6 bg-gray-900 text-white fixed w-full top-0 z-10 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">ADVANIX</h1>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-500"
                            onClick={(e) => {
                                if (location.pathname === '/') e.preventDefault();
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li><Link to="/history" className="hover:text-blue-500">Projects</Link></li>
                    <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        ref={buttonRef}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="mt-4 space-y-2">
                    <li>
                        <Link
                            to="/"
                            className="block text-center hover:text-blue-500"
                            onClick={(e) => {
                                if (location.pathname === '/') e.preventDefault();
                                setMobileMenuOpen(false);
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li><Link to="/history" className="block text-center hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/services" className="block text-center hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/contact" className="block text-center hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
