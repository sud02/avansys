// ProjectsHistory.jsx

import React, { useState } from 'react';

function ProjectsHistory() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav className="p-6 bg-gray-900 text-white fixed w-full top-0 z-10 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">IT Consultancy</h1>
                    <ul className="hidden md:flex space-x-6">
                        <li><a href="/" className="hover:text-blue-500">Home</a></li>
                        <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="/services" className="hover:text-blue-500">Services</a></li>
                    </ul>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
                        <a href="/" className="block hover:text-blue-500">Home</a>
                        <a href="/usp" className="block hover:text-blue-500">USP</a>
                        <a href="/projects" className="block hover:text-blue-500">Projects</a>
                        <a href="/services" className="block hover:text-blue-500">Services</a>
                    </div>
                )}
            </nav>

            {/* Company History Section */}
            <section className="history-section" style={{ paddingTop: '120px' }}>
                <h2 className="history-header">Our Journey</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="font-bold text-xl">2020</span>
                        <div className="timeline-content">
                            <h3 className="font-semibold">Founded in 2020</h3>
                            <p>Our IT consultancy firm was established to bridge the gap between businesses and technology, delivering exceptional IT solutions.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="font-bold text-xl">2021</span>
                        <div className="timeline-content">
                            <h3 className="font-semibold">First Major Project</h3>
                            <p>We successfully completed our first enterprise project, helping a major financial institution migrate to the cloud.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="font-bold text-xl">2023</span>
                        <div className="timeline-content">
                            <h3 className="font-semibold">Global Expansion</h3>
                            <p>We expanded our operations internationally, providing IT solutions to companies across multiple continents.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Previous Projects Section */}
            <section className="project-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center">Previous Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="project-item">
                            <img src="project1.jpg" alt="Project 1" />
                            <h3 className="font-semibold text-xl mt-4">E-commerce Platform Development</h3>
                            <p>Developed a high-traffic e-commerce platform for a global retailer, ensuring seamless user experience and scalability.</p>
                        </div>
                        <div className="project-item">
                            <img src="project2.jpg" alt="Project 2" />
                            <h3 className="font-semibold text-xl mt-4">AI-Powered Analytics Dashboard</h3>
                            <p>Created a custom AI-powered analytics tool for a logistics company to optimize operations and reduce costs.</p>
                        </div>
                        <div className="project-item">
                            <img src="project3.jpg" alt="Project 3" />
                            <h3 className="font-semibold text-xl mt-4">Cloud Migration for Finance</h3>
                            <p>Led the migration of a financial institution's IT infrastructure to the cloud, ensuring security and compliance.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectsHistory;
