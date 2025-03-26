import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <h2 className="footer-logo">ADVANIX</h2>
                    <p className="footer-tagline">Creating exceptional digital experiences</p>
                    <div className="footer-newsletter">
                        <h3>Stay Connected</h3>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email" />
                            <button className="btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                
                <div className="footer-nav">
                    <div className="footer-nav-column">
                        <h3 className="footer-heading">Navigation</h3>
                        <ul className="footer-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/projects" className="footer-link">Projects</Link></li>
                            <li><Link to="/services" className="footer-link">Services</Link></li>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-nav-column">
                        <h3 className="footer-heading">Resources</h3>
                        <ul className="footer-list">
                            <li><Link to="/blog" className="footer-link">Blog</Link></li>
                            <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
                            <li><Link to="/careers" className="footer-link">Careers</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-nav-column">
                        <h3 className="footer-heading">Legal</h3>
                        <ul className="footer-list">
                            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                            <li><Link to="/cookie-policy" className="footer-link">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-divider"></div>
            
            <div className="footer-bottom">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Advanix. All rights reserved.
                </div>
                <div className="footer-social">
                    <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer"><span className="social-icon">𝕏</span></a>
                    <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer"><span className="social-icon">in</span></a>
                    <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer"><span className="social-icon">IG</span></a>
                    <a href="https://dribbble.com" className="social-link" target="_blank" rel="noopener noreferrer"><span className="social-icon">Db</span></a>
                </div>
                <div className="footer-email">
                    <a href="mailto:business@advanix.in" className="footer-email-link">business@advanix.in</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
