import React, { useState, useRef, useEffect } from 'react';
import './ProjectsHistory.css'

function ProjectsHistory() {
    const [timelineItems, setTimelineItems] = useState([
        {
            year: '2010',
            title: 'Company Founded',
            description: 'Our journey began with a vision to transform the digital landscape through innovative solutions.'
        },
        {
            year: '2013',
            title: 'First Major Project',
            description: 'Successfully delivered our first enterprise-scale project, setting the foundation for future growth.'
        },
        {
            year: '2016',
            title: 'International Expansion',
            description: 'Expanded our operations globally, establishing partnerships across Europe and Asia.'
        },
        {
            year: '2019',
            title: 'Technological Innovation',
            description: 'Pioneered new methodologies in web development, earning industry recognition for our cutting-edge approaches.'
        },
        {
            year: '2023',
            title: 'Industry Leadership',
            description: 'Positioned as an industry leader with a portfolio of successful projects across diverse sectors.'
        }
    ]);

    const [projects, setProjects] = useState([
        {
            title: 'E-Commerce Platform',
            description: 'Built a scalable e-commerce platform handling 100k+ daily users. Features include AI-powered product recommendations, real-time inventory management, and seamless payment integration with major providers.',
            image: '/images/projects/ecommerce-platform.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            link: '#',
            stats: {
                users: '100k+',
                transactions: '1M+',
                uptime: '99.99%'
            }
        },
        {
            title: 'Financial Analytics Dashboard',
            description: 'Developed a comprehensive financial analytics platform for institutional investors. Real-time market data visualization, predictive modeling, and automated reporting capabilities help make informed investment decisions.',
            image: '/images/projects/financial-dashboard.jpg',
            technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL'],
            link: '#',
            stats: {
                dataPoints: '5M+',
                accuracy: '99.5%',
                processTime: '<100ms'
            }
        },
        {
            title: 'Healthcare Management System',
            description: 'Revolutionized patient care with an integrated healthcare management solution. Features include secure patient records, appointment scheduling, telemedicine integration, and automated billing systems.',
            image: '/images/projects/healthcare-system.jpg',
            technologies: ['Angular', 'Java Spring', 'Oracle', 'HIPAA Compliant'],
            link: '#',
            stats: {
                patients: '500k+',
                hospitals: '50+',
                satisfaction: '98%'
            }
        }
    ]);

    const timelineItemsRef = useRef([]);
    const projectItemsRef = useRef([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles
        const generateParticles = () => {
            const newParticles = Array.from({ length: 30 }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                moveX: `${(Math.random() - 0.5) * 200}px`,
                moveY: `${(Math.random() - 0.5) * 200}px`,
                duration: 15 + Math.random() * 10,
                delay: Math.random() * 5
            }));
            setParticles(newParticles);
        };

        generateParticles();

        // Create observer for timeline items
        const timelineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Add delay based on index for staggered animation
                        const index = timelineItemsRef.current.indexOf(entry.target);
                        entry.target.style.setProperty('--delay', index + 1);
                        timelineObserver.unobserve(entry.target);
                    }
                });
            },
            { 
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Create observer for project items
        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        projectObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        // Observe timeline items
        timelineItemsRef.current.forEach((item) => {
            if (item) timelineObserver.observe(item);
        });

        // Observe project items
        projectItemsRef.current.forEach((item) => {
            if (item) projectObserver.observe(item);
        });

        return () => {
            timelineItemsRef.current.forEach((item) => {
                if (item) timelineObserver.unobserve(item);
            });
            projectItemsRef.current.forEach((item) => {
                if (item) projectObserver.unobserve(item);
            });
        };
    }, []);

    return (
        <div>
            {/* Company History Section */}
            <section className="history-section">
                <div className="timeline-particles">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="timeline-particle"
                            style={{
                                left: particle.left,
                                top: particle.top,
                                '--moveX': particle.moveX,
                                '--moveY': particle.moveY,
                                animation: `floatParticle ${particle.duration}s infinite ${particle.delay}s`
                            }}
                        />
                    ))}
                </div>

                <h2 className="section-title">
                    Our Journey
                    <div className="section-title-underline"></div>
                </h2>

                <div className="timeline">
                    {timelineItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="timeline-item"
                            ref={(el) => (timelineItemsRef.current[index] = el)}
                            style={{ '--delay': index + 1 }}
                        >
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Previous Projects Section */}
            <section className="project-section py-16 bg-black text-white">
                {/* Heading for "Previous Projects" */}
                <div className="project-header">
                    <h2 className="section-title">Previous Projects</h2>
                    <div className="section-title-underline"></div>
                </div>
                <div className="project-container">
                    {/* Grid of Projects */}
                    <div className="project-grid">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className="project-item"
                                ref={(el) => (projectItemsRef.current[index] = el)}
                            >
                                <div className="project-content">
                                    <div className="project-image">
                                        <div 
                                            className="project-image-content"
                                            style={{
                                                backgroundImage: `url(${project.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="project-image-overlay">
                                                <div className="project-stats">
                                                    {Object.entries(project.stats).map(([key, value]) => (
                                                        <div key={key} className="stat-item">
                                                            <span className="stat-value">{value}</span>
                                                            <span className="stat-label">{key}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-technologies">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="project-link">
                                        View Project
                                        <span className="arrow-icon">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProjectsHistory;
