import React from 'react';
import 'tailwindcss/tailwind.css';

const ServicesPage = () => {
    return (
        <div>
            {/* Services Section */}
            <section
                id="services"
                className="service-section"
                style={{ paddingTop: '120px', paddingBottom: '4rem', backgroundColor: '#f9f9f9' }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Services</h2>
                <div className="container mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
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
                        ].map((service, index) => (
                            <div key={index} className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
                                {/* Uncomment if images are used */}
                                {/* <img src={service.img} alt={service.title} style={{ width: '50px', marginBottom: '1rem' }} /> */}
                                <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
                                <p className="mt-4 text-gray-600 text-sm md:text-base">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
