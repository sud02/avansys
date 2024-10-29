import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ServicesPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        <a href="/usp" className="block hover:text-blue-500">USP</a>
                        <a href="/history" className="block hover:text-blue-500">Projects</a>
                        <a href="/services" className="block hover:text-blue-500">Services</a>
                    </div>
                )}
            </nav>

            {/* Services Section */}
            <section id="services" className="service-section" style={{ paddingTop: '120px', paddingBottom: '4rem', backgroundColor: '#f9f9f9' }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                img: "cloud-icon.svg",
                                title: "Cloud Solutions",
                                description: "Comprehensive cloud services, including cloud migration, architecture, and infrastructure optimization.",
                            },
                            {
                                img: "security-icon.svg",
                                title: "Cybersecurity",
                                description: "Advanced cybersecurity services to protect your business from data breaches and cyber threats.",
                            },
                            {
                                img: "analytics-icon.svg",
                                title: "Data Analytics",
                                description: "Leverage data insights to drive business decisions with our state-of-the-art data analytics solutions.",
                            },
                            {
                                img: "ai-icon.svg",
                                title: "AI & Machine Learning",
                                description: "Harness the power of artificial intelligence to automate processes and enhance decision-making.",
                            },
                            {
                                img: "consulting-icon.svg",
                                title: "IT Consulting",
                                description: "Expert consulting services to guide your business through technological transformation.",
                            },
                            {
                                img: "development-icon.svg",
                                title: "Custom Software Development",
                                description: "End-to-end software development tailored to your business needs, from concept to deployment.",
                            },
                        ].map((service, index) => (
                            <div key={index} className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
                                <img src={service.img} alt={service.title} style={{ width: '50px', marginBottom: '1rem' }} />
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="mt-4 text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
