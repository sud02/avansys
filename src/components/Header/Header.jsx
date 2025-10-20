// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import useNavigation from '../../hooks/useNavigation';
import { preventBodyScroll } from '../../utils/scrollUtils';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const navigateWithTransition = useNavigation();

    // Handle scroll event to change header appearance
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Event handler to close the menu when clicking outside
    const handleOutsideClick = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setMobileMenuOpen(false);
        }
    };

    // Adding/removing event listener to detect outside clicks
    useEffect(() => {
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
            // Prevent scrolling when menu is open
            preventBodyScroll(true);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
            // Restore scrolling when menu is closed
            preventBodyScroll(false);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            preventBodyScroll(false);
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Custom navigation handler
    const handleNavigation = (path, e) => {
        e.preventDefault();
        if (path === location.pathname) return;
        
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
        
        navigateWithTransition(path);
    };

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="header-background">
                <div className="header-accent"></div>
            </div>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/" onClick={(e) => handleNavigation('/', e)} className="logo">ADVANIX</Link>
                </div>
                
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link 
                                to="/"
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                onClick={(e) => handleNavigation('/', e)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/history" 
                                className={`nav-link ${location.pathname === '/history' ? 'active' : ''}`}
                                onClick={(e) => handleNavigation('/history', e)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/services" 
                                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                                onClick={(e) => handleNavigation('/services', e)}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contact" 
                                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                                onClick={(e) => handleNavigation('/contact', e)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <div className="cta-container">
                    <Link to="/contact" onClick={(e) => handleNavigation('/contact', e)} className="cta-button">Get Started</Link>
                </div>
                
                {/* Mobile Menu Button - Only visible when menu is closed */}
                {!mobileMenuOpen && (
                    <button
                        ref={buttonRef}
                        onClick={toggleMobileMenu}
                        className="menu-toggle"
                        aria-label="Open menu"
                    >
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div 
                    ref={menuRef}
                    className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
                >
                    <div className="mobile-menu-header">
                        <div className="logo">ADVANIX</div>
                        {/* Close button - Only rendered when menu is open */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="close-button"
                            aria-label="Close menu"
                        >
                            <span className="close-icon"></span>
                        </button>
                    </div>
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-nav-list">
                            <li className="mobile-nav-item">
                                <Link 
                                    to="/" 
                                    className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    onClick={(e) => handleNavigation('/', e)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link 
                                    to="/history" 
                                    className={`mobile-nav-link ${location.pathname === '/history' ? 'active' : ''}`}
                                    onClick={(e) => handleNavigation('/history', e)}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link 
                                    to="/services" 
                                    className={`mobile-nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                                    onClick={(e) => handleNavigation('/services', e)}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link 
                                    to="/contact" 
                                    className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                                    onClick={(e) => handleNavigation('/contact', e)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="mobile-cta">
                        <Link 
                            to="/get-started" 
                            className="mobile-cta-button"
                            onClick={(e) => handleNavigation('/get-started', e)}
                        >
                            Get Started
                        </Link>
                    </div>
                    
                    <div className="mobile-social">
                        <a href="https://twitter.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                            <span className="mobile-social-icon">𝕏</span>
                        </a>
                        <a href="https://linkedin.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                            <span className="mobile-social-icon">in</span>
                        </a>
                        <a href="https://instagram.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                            <span className="mobile-social-icon">IG</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
