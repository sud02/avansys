import React, { useState } from 'react';
import { init, send } from 'emailjs-com'; 
import './ContactForm.css';

init("yvf4mewD3SJB6ZBfp");

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,    
            from_email: formData.email,   
            from_phone: formData.phone,  
            message: formData.message,
            to_name: 'Recipient Name',    
        };

        // Send email
        send('service_ramqe3z', 'template_kuz73g9', templateParams, 'yvf4mewD3SJB6ZBfp')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
            });
    };

    return (
        <div>
            {/* Contact Form */}
            <div className="contact-form-container pt-24">
                <h2>Contact Us</h2>
                <p>Get in touch with us for your IT consultancy needs. We're here to help!</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
