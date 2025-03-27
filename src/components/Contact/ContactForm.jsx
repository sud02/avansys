import React, { useState, useRef, useEffect } from 'react';
import { init, send } from 'emailjs-com'; 
import './ContactForm.css';

init("yvf4mewD3SJB6ZBfp");

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    
    const [formState, setFormState] = useState({
        isFocused: null,
        isSubmitting: false,
        isSubmitted: false,
        error: null
    });
    
    const [isVisible, setIsVisible] = useState(false);
    const formRef = useRef(null);
    const inputRefs = useRef([]);
    
    // Animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        });

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);
    
    // Character counter animation for message field
    const [charCount, setCharCount] = useState(0);
    const maxChars = 500;

    const handleFocus = (field) => {
        setFormState(prev => ({ ...prev, isFocused: field }));
    };

    const handleBlur = () => {
        setFormState(prev => ({ ...prev, isFocused: null }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
        
        if (name === 'message') {
            setCharCount(value.length);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

        const templateParams = {
            from_name: formData.name,    
            from_email: formData.email,   
            from_phone: formData.phone,  
            message: formData.message,
            to_name: 'Advanix Team',
        };

        // Send email
        send('service_ramqe3z', 'template_kuz73g9', templateParams, 'yvf4mewD3SJB6ZBfp')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setFormState(prev => ({ 
                    ...prev, 
                    isSubmitting: false,
                    isSubmitted: true 
                }));
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    });
                    setCharCount(0);
                    setFormState(prev => ({ 
                        ...prev, 
                        isSubmitted: false 
                    }));
                }, 5000);
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
                setFormState(prev => ({ 
                    ...prev, 
                    isSubmitting: false,
                    error: 'Failed to send email. Please try again later.'
                }));
            });
    };

    return (
        <section className={`contact-section ${isVisible ? 'visible' : ''}`} ref={formRef}>
            <div className="contact-background">
                <div className="contact-particles">
                    {Array(10).fill().map((_, i) => (
                        <div key={i} className="contact-particle"></div>
                    ))}
                </div>
            </div>
            
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-header">
                        <h2 className="contact-title">Get in Touch</h2>
                        <div className="title-underline"></div>
                        <p className="contact-subtitle">
                            Have a project in mind? Contact us today and let's transform your ideas into reality.
                        </p>
                    </div>
                    
                    <div className="contact-form-wrapper">
                        {formState.isSubmitted ? (
                            <div className="success-message">
                                <div className="success-icon"></div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for contacting us. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className={`form-group ${formState.isFocused === 'name' ? 'focused' : ''} ${formData.name ? 'has-value' : ''}`}>
                                        <label htmlFor="name" className="form-label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            ref={el => inputRefs.current[0] = el}
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('name')}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                    
                                    <div className={`form-group ${formState.isFocused === 'email' ? 'focused' : ''} ${formData.email ? 'has-value' : ''}`}>
                                        <label htmlFor="email" className="form-label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            ref={el => inputRefs.current[1] = el}
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('email')}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                </div>
                                
                                <div className={`form-group ${formState.isFocused === 'phone' ? 'focused' : ''} ${formData.phone ? 'has-value' : ''}`}>
                                    <label htmlFor="phone" className="form-label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        ref={el => inputRefs.current[2] = el}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('phone')}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <div className="input-border"></div>
                                </div>
                                
                                <div className={`form-group ${formState.isFocused === 'message' ? 'focused' : ''} ${formData.message ? 'has-value' : ''}`}>
                                    <label htmlFor="message" className="form-label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea
                                        ref={el => inputRefs.current[3] = el}
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={handleBlur}
                                        maxLength={maxChars}
                                        required
                                    />
                                    <div className="input-border"></div>
                                    <div className="char-counter">
                                        <div className="counter-text">{charCount}/{maxChars}</div>
                                        <div className="counter-bar">
                                            <div 
                                                className="counter-progress" 
                                                style={{width: `${(charCount / maxChars) * 100}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {formState.error && (
                                    <div className="error-message">{formState.error}</div>
                                )}
                                
                                <button 
                                    type="submit" 
                                    className={`submit-button ${formState.isSubmitting ? 'submitting' : ''}`}
                                    disabled={formState.isSubmitting}
                                >
                                    {formState.isSubmitting ? (
                                        <span className="button-loader"></span>
                                    ) : (
                                        <>
                                            Send Message
                                            <span className="button-arrow">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <h3>Location</h3>
                        <p>Bengaluru, India</p>
                    </div>
                    
                    <div className="info-card">
                        <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <h3>Phone</h3>
                        <p>+91 (800) 123-4567</p>
                    </div>
                    
                    <div className="info-card">
                        <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <h3>Email</h3>
                        <p>business@advanix.in</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
