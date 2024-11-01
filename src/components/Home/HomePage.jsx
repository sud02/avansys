import React from 'react';
import './HomePage.css';
// import { Canvas } from "@react-three/fiber";
import ContactForm from '../Contact/ContactForm';
import FloatingRobot from '../Robot/FloatingRobot';
import Header from '../Header/Header';

const HomePage = () => {

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
            <Header />
            {/* Hero Section */}
            <section id="home" className="hero flex items-center justify-center">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Side (Text) */}
                    <div className="hero-text text-left w-1/2">
                        <h2 className="text-5xl font-semibold">Transforming IT Solutions</h2>
                        <p className="mt-4 text-xl">AI-Powered Innovation for Everyone, Everywhere</p>
                        <div className="scroll-down" onClick={() => scrollTo('#usp')}>↓ Scroll Down</div>
                    </div>

{/*                     */}{/* Right Side (Floating 3D Robot Face) */}
{/*                    <div className="hero-image w-1/2"> */}
{/*                        <FloatingRobotCanvas style={{ height: "300px" }}> */}
{/*                            <ambientLight intensity={0.5} /> */}
{/*                            <directionalLight position={[5, 5, 5]} /> */}
{/*                            <FloatingRobot /> */}
{/*                        </FloatingRobotCanvas> */}
{/*                    </div> */}

                    {/* Right Side (2D Floating Robot Illustration) */}
                            <div className="hero-image w-1/2">
                                <FloatingRobot />
                            </div>
                </div>
            </section>

            {/* USP Section */}
            <section id="usp" className="usp-section">
            <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="usp-item">
                            <h3>AI-Driven IT Solutions</h3>
                            <p>We offer intelligent solutions tailored to meet the unique needs of every client, utilizing advanced AI to drive innovation and efficiency for businesses of all sizes. Our focus is on making AI accessible and effective for everyone, everywhere</p>
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
