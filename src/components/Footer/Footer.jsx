import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-title">ADVANIX</h1>

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
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        <li><Link to="/support" className="footer-link">Support</Link></li>
                        <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                        <li><Link to="/feedback" className="footer-link">Feedback</Link></li>
                        <li><Link to="/events" className="footer-link">Events</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 advanix. All rights reserved.
                <div className="footer-email">
                    <div className="footer-email-link">business@advanix.in</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
