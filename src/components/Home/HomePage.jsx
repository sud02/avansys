import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Spline from '@splinetool/react-spline';
import ContactForm from '../Contact/ContactForm';
import FloatingRobot from '../Robot/FloatingRobot';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState({
        hero: false,
        usp1: false,
        usp2: false, 
        usp3: false
    });
    
    const heroRef = useRef(null);
    const uspRefs = [useRef(null), useRef(null), useRef(null)];
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    
    // Custom cursor effect
    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        
        if (!cursor || !cursorDot) return;
        
        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursor.style.left = `${posX}px`;
            cursor.style.top = `${posY}px`;
            
            // Delayed follow for dot
            setTimeout(() => {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }, 50);
        };
        
        window.addEventListener('mousemove', moveCursor);
        
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Intersection Observer for animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        };

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({ ...prev, hero: true }));
                    heroObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const uspObservers = uspRefs.map((ref, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [`usp${index + 1}`]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            }, { ...observerOptions, threshold: 0.15 });
            
            return observer;
        });

        if (heroRef.current) {
            heroObserver.observe(heroRef.current);
        }

        uspRefs.forEach((ref, index) => {
            if (ref.current) {
                uspObservers[index].observe(ref.current);
            }
        });

        return () => {
            if (heroRef.current) heroObserver.unobserve(heroRef.current);
            uspRefs.forEach((ref, index) => {
                if (ref.current) uspObservers[index].unobserve(ref.current);
            });
        };
    }, []);

    const scrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    };

    const onSplineLoad = (spline) => {
        console.log('Spline scene loaded:', spline);
        
        try {
            // Try to access the scene and set background to transparent
            if (spline && spline.runtime && spline.runtime.scene) {
                // Set background to transparent
                if (spline.runtime.scene.background) {
                    spline.runtime.scene.background = null;
                }
                
                // Also try to clear any background color or texture
                if (spline.runtime.renderer) {
                    spline.runtime.renderer.setClearColor(0x000000, 0); // Transparent background
                }
            }
            
            // Scale up the 3D model if possible
            if (spline && spline.findObjectByName) {
                // Find main objects and scale them up
                const sceneObjects = spline.findObjectsByType('Object3D');
                if (sceneObjects && sceneObjects.length) {
                    sceneObjects.forEach(obj => {
                        if (obj.scale) {
                            // Increase scale by 20%
                            obj.scale.set(
                                obj.scale.x * 1.2, 
                                obj.scale.y * 1.2, 
                                obj.scale.z * 1.2
                            );
                        }
                    });
                }
                
                // Completely lock down Spline scene to prevent any movement
                if (spline.runtime) {
                    // Disable all interaction
                    if (spline.runtime.orbitControls) {
                        spline.runtime.orbitControls.enabled = false;
                        spline.runtime.orbitControls.autoRotate = false;
                        spline.runtime.orbitControls.enableDamping = false;
                        spline.runtime.orbitControls.enableZoom = false;
                        spline.runtime.orbitControls.enablePan = false;
                        spline.runtime.orbitControls.enableRotate = false;
                    }
                    
                    // Fix camera
                    if (spline.runtime.camera) {
                        const camera = spline.runtime.camera;
                        
                        // Store original position, rotation and target
                        const originalPosition = { ...camera.position };
                        const originalRotation = camera.rotation ? { ...camera.rotation } : null;
                        const originalTarget = camera.target ? { ...camera.target } : null;
                        
                        // Freeze camera position
                        if (camera.position) {
                            Object.defineProperty(camera.position, 'x', {
                                get: () => originalPosition.x,
                                set: () => originalPosition.x
                            });
                            Object.defineProperty(camera.position, 'y', {
                                get: () => originalPosition.y,
                                set: () => originalPosition.y
                            });
                            Object.defineProperty(camera.position, 'z', {
                                get: () => originalPosition.z,
                                set: () => originalPosition.z
                            });
                        }
                        
                        // Freeze camera rotation
                        if (camera.rotation && originalRotation) {
                            Object.defineProperty(camera.rotation, 'x', {
                                get: () => originalRotation.x,
                                set: () => originalRotation.x
                            });
                            Object.defineProperty(camera.rotation, 'y', {
                                get: () => originalRotation.y,
                                set: () => originalRotation.y
                            });
                            Object.defineProperty(camera.rotation, 'z', {
                                get: () => originalRotation.z,
                                set: () => originalRotation.z
                            });
                        }
                        
                        // Freeze camera target
                        if (camera.target && originalTarget) {
                            Object.defineProperty(camera.target, 'x', {
                                get: () => originalTarget.x,
                                set: () => originalTarget.x
                            });
                            Object.defineProperty(camera.target, 'y', {
                                get: () => originalTarget.y,
                                set: () => originalTarget.y
                            });
                            Object.defineProperty(camera.target, 'z', {
                                get: () => originalTarget.z,
                                set: () => originalTarget.z
                            });
                        }
                        
                        // Disable any update methods
                        if (camera.update) {
                            camera.update = () => {};
                        }
                    }
                    
                    // Disable user input on the entire runtime
                    if (spline.runtime.input) {
                        spline.runtime.input.disable();
                    }
                }
            }
        } catch (err) {
            console.log('Could not modify Spline scene:', err);
        }
        
        // Try to remove watermark immediately after load
        setTimeout(() => {
            const watermarks = document.querySelectorAll('[data-spline-watermark], a[href*="spline"], canvas + div');
            watermarks.forEach(watermark => {
                if (watermark) {
                    watermark.style.display = 'none';
                    watermark.style.opacity = '0';
                    watermark.style.visibility = 'hidden';
                }
            });
        }, 100);
    };

    return (
        <div className="homepage">
            {/* Custom cursor */}
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            
            {/* Hero Section */}
            <section id="home" className={`hero ${isVisible.hero ? 'visible' : ''}`} ref={heroRef}>
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-particles">
                        {Array(20).fill().map((_, i) => (
                            <div key={i} className="particle"></div>
                        ))}
                    </div>
                </div>
                
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="hero-title-line">Transforming</span>
                            <span className="hero-title-line">IT Solutions</span>
                        </h1>
                        <p className="hero-subtitle">AI-Powered Innovation for Everyone, Everywhere</p>
                        
{/*                         <div className="hero-cta">
                            <button className="primary-button" onClick={() => scrollTo('#contact')}>
                                Get Started
                                <span className="button-arrow">→</span>
                            </button>
                            <button className="secondary-button" onClick={() => scrollTo('#usp')}>
                                Learn More
                            </button>
                        </div> */}
                    </div>
                    
                    <div className="hero-visual">
                        <Spline
                            scene="https://prod.spline.design/D600HNWz1PyuyA94/scene.splinecode"
                            className="spline-scene"
                            style={{ 
                                width: '100%', 
                                height: '100%',
                                transformOrigin: 'center center',
                                background: 'transparent'
                            }}
                            onLoad={onSplineLoad}
                            renderOnDemand={false}
                        />
                    </div>
                </div>
                
                <div className="scroll-indicator" onClick={() => scrollTo('#usp')}>
                    <span className="scroll-text">Scroll</span>
                    <span className="scroll-icon"></span>
                </div>
            </section>

            {/* USP Section */}
            <section id="usp" className="usp-section">
                <div className="section-title-container">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div className="section-title-underline"></div>
                </div>
                
                <div className="usp-container">
                    <div className={`usp-item ${isVisible.usp1 ? 'visible' : ''}`} ref={uspRefs[0]}>
                        <div className="usp-icon">
                            <div className="icon-ai"></div>
                        </div>
                        <h3 className="usp-title">AI-Driven IT Solutions</h3>
                        <p className="usp-description">
                            We offer intelligent solutions tailored to meet the unique needs of every client, 
                            utilizing advanced AI to drive innovation and efficiency for businesses of all sizes.
                        </p>
                        <div className="usp-link">
                            <a href="/services">Explore AI Solutions</a>
                        </div>
                    </div>
                    
                    <div className={`usp-item ${isVisible.usp2 ? 'visible' : ''}`} ref={uspRefs[1]}>
                        <div className="usp-icon">
                            <div className="icon-scalable"></div>
                        </div>
                        <h3 className="usp-title">Scalable Infrastructure</h3>
                        <p className="usp-description">
                            Our services are designed to grow with your business, offering flexibility 
                            and scalability to adapt to your evolving needs and goals.
                        </p>
                        <div className="usp-link">
                            <a href="/services">View Our Infrastructure</a>
                        </div>
                    </div>
                    
                    <div className={`usp-item ${isVisible.usp3 ? 'visible' : ''}`} ref={uspRefs[2]}>
                        <div className="usp-icon">
                            <div className="icon-support"></div>
                        </div>
                        <h3 className="usp-title">24/7 Support</h3>
                        <p className="usp-description">
                            Round-the-clock support from our dedicated team ensures your business 
                            stays online and operational at all times without interruption.
                        </p>
                        <div className="usp-link">
                            <a href="/contact">Contact Support</a>
                        </div>
                    </div>
                </div>
                
                <div className="usp-background">
                    <div className="usp-accent"></div>
                </div>
            </section>
            
            {/* Interactive Feature Section */}
            <section className="interactive-section">
                <div className="interactive-container">
                    <div className="interactive-text">
                        <h2 className="interactive-title">Experience the Future of IT</h2>
                        <p className="interactive-description">
                            Our innovative approach combines cutting-edge technology with human expertise to deliver 
                            solutions that transform businesses and drive real results.
                        </p>
                    </div>
                    
                    <div className="interactive-demo">
                        <div className="demo-box">
                            <div className="demo-overlay">
                                <p>Hover to Explore</p>
                            </div>
                            <div className="demo-content">
                                <div className="demo-item"></div>
                                <div className="demo-item"></div>
                                <div className="demo-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div id="contact">
                <ContactForm />
            </div>
        </div>
    );
};

export default HomePage;
