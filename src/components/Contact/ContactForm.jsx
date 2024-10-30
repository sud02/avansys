import React, { useState } from 'react';
import './ContactForm.css';

const ContactPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        //api call here
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="p-6 bg-gray-900 text-white fixed w-full top-0 z-10 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">IT Consultancy</h1>
                    <ul className="hidden md:flex space-x-6">
                        <li><a href="/" className="hover:text-blue-500">Home</a></li>
                        <li><a href="/history" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="/services" className="hover:text-blue-500">Services</a></li>
                        <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
                        <a href="/" className="block hover:text-blue-500">Home</a>
                        <a href="/history" className="block hover:text-blue-500">Projects</a>
                        <a href="/services" className="block hover:text-blue-500">Services</a>
                        <a href="/contact" className="block hover:text-blue-500">Contact</a>
                    </div>
                )}
            </nav>

            {/* Contact Form */}
            <div className="contact-form-container pt-24">
                <h2>Contact Us</h2>
                <p>Get in touch with us for your IT consultancy needs. We're here to help!</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
