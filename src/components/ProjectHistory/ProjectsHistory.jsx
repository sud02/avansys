import React from 'react';
import './ProjectsHistory.css'
function ProjectsHistory() {

    return (
        <div>
            {/* Company History Section */}
            <section className="history-section bg-gray-100 py-16" style={{ paddingTop: '120px' }}>
                <h2 className="text-center text-4xl font-bold mb-12">Our Journey</h2>
                <div className="timeline max-w-3xl mx-auto text-left space-y-8">
                    {/* Timeline Item 1 */}
                    <div className="timeline-item flex items-center gap-6">
                        <span className="font-bold text-2xl">2022</span>
                        <div className="timeline-content">
                            <h3 className="font-semibold text-lg">Founded in 2022</h3>
                            <p className="text-gray-600 mt-1">Advanix was established to bridge the gap between businesses and technology, delivering exceptional IT solutions induced with AI.</p>
                        </div>
                    </div>
                    {/* Timeline Item 2 */}
                    <div className="timeline-item flex items-center gap-6">
                        <span className="font-bold text-2xl">2023</span>
                        <div className="timeline-content">
                            <h3 className="font-semibold text-lg">First Major Project</h3>
                            <p className="text-gray-600 mt-1">We successfully completed our first enterprise project, assisting a statewide Animal Welfare organization in its digital transformation.</p>
                        </div>
                    </div>
                    {/* Timeline Item 3 */}
                    <div className="timeline-item flex items-center gap-6">
                        <span className="font-bold text-2xl">2024</span>
                        <div className="timeline-content">
                            <h3 className="font-semibold text-lg">Global Expansion</h3>
                            <p className="text-gray-600 mt-1">We expanded our operations internationally, providing IT solutions to companies across multiple continents.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Previous Projects Section */}
            <section className="project-section py-16 bg-white">
                {/* Heading for "Previous Projects" */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center">Previous Projects</h2>
                </div>
                <div className="container mx-auto px-4">
                    {/* Grid of Projects */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="project-item">
{/*                             <img src="project1.jpg" alt="Project 1" className="w-full rounded-md mb-4" /> */}
                            <h3 className="font-semibold text-xl mt-4 text-center">E-commerce Platform Development</h3>
                            <p className="text-gray-600 mt-2 text-center">Developed a high-traffic e-commerce platform for a global retailer, ensuring seamless user experience and scalability.</p>
                        </div>
                        {/* Project 2 */}
                        <div className="project-item">
{/*                             <img src="project2.jpg" alt="Project 2" className="w-full rounded-md mb-4" /> */}
                            <h3 className="font-semibold text-xl mt-4 text-center">AI-Powered Analytics Dashboard</h3>
                            <p className="text-gray-600 mt-2 text-center">Created a custom AI-powered analytics tool for a software company to optimize operations and reduce costs.</p>
                        </div>
                        {/* Project 3 */}
                        <div className="project-item">
{/*                             <img src="project3.jpg" alt="Project 3" className="w-full rounded-md mb-4" /> */}
                            <h3 className="font-semibold text-xl mt-4 text-center">GPS-Enabled Full Stack Solution</h3>
                            <p className="text-gray-600 mt-2 text-center">A full stack solution with built-in GPS tracking, enabling real-time location data and interactive mapping for enhanced operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProjectsHistory;
