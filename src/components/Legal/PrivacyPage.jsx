import React from 'react';
import usePageTransition from '../../hooks/usePageTransition';
import './LegalPage.css';

const PrivacyPage = () => {
    const { style: pageTransitionStyle } = usePageTransition(true, 600);
    return (
        <div style={pageTransitionStyle}>
            <section className="legal-section">
                <h2 className="section-title">
                    Privacy Policy
                    <div className="section-title-underline"></div>
                </h2>
                <p>
                    Your privacy is important to us. This policy explains what data we collect,
                    how we use it, and your rights.
                </p>

                <h3>Information We Collect</h3>
                <ul>
                    <li>Contact information (such as name and email)</li>
                    <li>Usage data and analytics</li>
                    <li>Information you provide via forms or communications</li>
                </ul>

                <h3>How We Use Information</h3>
                <ul>
                    <li>To provide and improve our services</li>
                    <li>To communicate with you about updates and support</li>
                    <li>To enhance security and prevent fraud</li>
                </ul>

                <h3>Your Rights</h3>
                <p>
                    You may request access, correction, or deletion of your personal data. Contact
                    us at <a href="mailto:business@advanix.in">business@advanix.in</a>.
                </p>

                <h3>Updates</h3>
                <p>
                    We may update this policy periodically. Continued use of our services after
                    changes means you accept the updated policy.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPage;


