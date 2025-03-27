import React, { useState, useRef, useEffect } from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
    const [activeService, setActiveService] = useState(null);
    const serviceItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        const index = serviceItemsRef.current.indexOf(entry.target);
                        entry.target.style.setProperty('--delay', index + 1);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        serviceItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => {
            serviceItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const services = [
        {
            img: "ai-icon.svg",
            title: "AI & Machine Learning",
            description: "Harness the power of artificial intelligence to automate processes and enhance decision-making.",
            features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
            icon: "🤖"
        },
        {
            img: "consulting-icon.svg",
            title: "IT Consulting",
            description: "Expert consulting services to guide your business through technological transformation.",
            features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Risk Assessment"],
            icon: "💡"
        },
        {
            img: "development-icon.svg",
            title: "Custom Software Development",
            description: "End-to-end software development tailored to your business needs, from concept to deployment.",
            features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
            icon: "⚙️"
        },
        {
            img: "cloud-icon.svg",
            title: "Cloud Solutions",
            description: "Comprehensive cloud services, including cloud migration, architecture, and infrastructure optimization.",
            features: ["Cloud Migration", "Infrastructure Setup", "DevOps Integration", "Cost Optimization"],
            icon: "☁️"
        },
        {
            img: "security-icon.svg",
            title: "Cybersecurity",
            description: "Advanced cybersecurity services to protect your business from data breaches and cyber threats.",
            features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
            icon: "🔒"
        },
        {
            img: "analytics-icon.svg",
            title: "Data Analytics",
            description: "Leverage data insights to drive business decisions with our state-of-the-art data analytics solutions.",
            features: ["Business Intelligence", "Data Visualization", "Performance Metrics", "Trend Analysis"],
            icon: "📊"
        },
    ];

    return (
        <div className="services-page">
            <section className="services-section">
                <div className="services-particles">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div
                            key={i}
                            className="service-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                '--moveX': `${(Math.random() - 0.5) * 200}px`,
                                '--moveY': `${(Math.random() - 0.5) * 200}px`,
                                animation: `floatParticle ${15 + Math.random() * 10}s infinite ${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                <div className="services-header">
                    <h2 className="section-title">
                        Our Services
                        <div className="section-title-underline"></div>
                    </h2>
                    <p className="section-subtitle">
                        Empowering businesses with cutting-edge technology solutions
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-item ${activeService === index ? 'active' : ''}`}
                            ref={(el) => (serviceItemsRef.current[index] = el)}
                            onClick={() => setActiveService(activeService === index ? null : index)}
                            style={{ '--delay': index + 1 }}
                        >
                            <div className="service-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-features">
                                    {service.features.map((feature, i) => (
                                        <span key={i} className="feature-tag">{feature}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="service-overlay">
                                <div className="service-details">
                                    <h4>Key Benefits</h4>
                                    <ul>
                                        <li>Increased Efficiency</li>
                                        <li>Cost Reduction</li>
                                        <li>Scalable Solutions</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
