import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-title">IT Consultancy</h1>

                <div className="footer-links">
                    <ul className="footer-list">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/history" className="footer-link">Projects</Link></li>
                        <li><Link to="/services" className="footer-link">Services</Link></li>
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/careers" className="footer-link">Careers</Link></li>
                        <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <li><Link to="/team" className="footer-link">Our Team</Link></li>
                        <li><Link to="/blog" className="footer-link">Blog</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        <li><Link to="/support" className="footer-link">Support</Link></li>
                        <li><Link to="/partners" className="footer-link">Partners</Link></li>
                        <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                        <li><Link to="/docs" className="footer-link">Documentation</Link></li>
                        <li><Link to="/api" className="footer-link">API</Link></li>
                        <li><Link to="/community" className="footer-link">Community</Link></li>
                        <li><Link to="/events" className="footer-link">Events</Link></li>
                        <li><Link to="/feedback" className="footer-link">Feedback</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 IT Consultancy. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
