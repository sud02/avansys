import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import ContactForm from '../Contact/ContactForm';

const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="p-6 bg-gray-900 text-white fixed w-full top-0 z-10 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">IT Consultancy</h1>
                    <ul className="hidden md:flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link to="/history" className="hover:text-blue-500">Projects</Link></li>
                        <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
                    </ul>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <ul className="md:hidden mt-4 space-y-2">
                        <li><Link to="/" className="block text-center hover:text-blue-500">Home</Link></li>
                        <li><Link to="/history" className="block text-center hover:text-blue-500">Projects</Link></li>
                        <li><Link to="/services" className="block text-center hover:text-blue-500">Services</Link></li>
                    </ul>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero flex items-center justify-center">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Side (Text) */}
                    <div className="hero-text text-left w-1/2">
                        <h2 className="text-5xl font-semibold">Transforming IT Solutions</h2>
                        <p className="mt-4 text-xl">Innovative, Scalable, and Reliable</p>
                        <div className="scroll-down" onClick={() => scrollTo('#usp')}>↓ Scroll Down</div>
                    </div>

                    {/* Right Side (Image) */}
                    <div className="hero-image w-1/2">
                        <img src="/path/to/hero-bg3.webp" alt="Illustration" className="opacity-70 object-cover" />
                    </div>
                </div>
            </section>

            {/* USP Section */}
            <section id="usp" className="usp-section">
            <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="usp-item">
                            <h3>Expert IT Solutions</h3>
                            <p>We provide cutting-edge solutions for businesses of all sizes, leveraging modern technologies to deliver results.</p>
                        </div>
                        <div className="usp-item">
                            <h3>Scalable Infrastructure</h3>
                            <p>Our services are designed to grow with your business, offering flexibility and scalability to adapt to your needs.</p>
                        </div>
                        <div className="usp-item">
                            <h3>24/7 Support</h3>
                            <p>Round-the-clock support from our dedicated team ensures your business stays online and operational at all times.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </div>
    );
};

export default HomePage;
