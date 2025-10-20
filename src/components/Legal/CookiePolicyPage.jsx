import React from 'react';
import usePageTransition from '../../hooks/usePageTransition';
import './LegalPage.css';

const CookiePolicyPage = () => {
    const { style: pageTransitionStyle } = usePageTransition(true, 600);
    return (
        <div style={pageTransitionStyle}>
            <section className="legal-section">
                <h2 className="section-title">
                    Cookie Policy
                    <div className="section-title-underline"></div>
                </h2>
                <p>
                    This Cookie Policy explains how we use cookies and similar technologies to
                    recognize you when you visit our site.
                </p>

                <h3>What Are Cookies?</h3>
                <p>
                    Cookies are small text files stored on your device to help websites function and
                    collect information about your browsing activity.
                </p>

                <h3>How We Use Cookies</h3>
                <ul>
                    <li>Essential cookies for core site functionality</li>
                    <li>Analytics cookies to understand site usage</li>
                    <li>Preference cookies to remember your settings</li>
                </ul>

                <h3>Managing Cookies</h3>
                <p>
                    You can control cookies through your browser settings. Disabling certain cookies
                    may impact site functionality.
                </p>
            </section>
        </div>
    );
};

export default CookiePolicyPage;


