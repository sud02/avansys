import React from 'react';
import { Link } from 'react-router-dom';
import usePageTransition from '../../hooks/usePageTransition';
import './LegalPage.css';

const LegalPage = () => {
    const { style: pageTransitionStyle } = usePageTransition(true, 600);
    return (
        <div style={pageTransitionStyle}>
            <section className="legal-section">
                <h2 className="section-title">
                    Legal
                    <div className="section-title-underline"></div>
                </h2>
                <p>
                    This page provides quick access to our key legal documents. Please review these
                    policies to understand how we operate, what you can expect from us, and what we
                    expect from you when using our services.
                </p>

                <div>
                    <ul>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                    </ul>
                </div>

                <p>
                    If you have any questions about these policies, contact us at
                    {' '}<a href="mailto:business@advanix.in">business@advanix.in</a>.
                </p>
            </section>
        </div>
    );
};

export default LegalPage;


