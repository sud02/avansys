import React from 'react';
import usePageTransition from '../../hooks/usePageTransition';
import './LegalPage.css';

const TermsPage = () => {
    const { style: pageTransitionStyle } = usePageTransition(true, 600);
    return (
        <div style={pageTransitionStyle}>
            <section className="legal-section">
                <h2 className="section-title">
                    Terms of Service
                    <div className="section-title-underline"></div>
                </h2>
                <p>
                    Welcome to Advanix. By accessing or using our website and services, you agree to
                    be bound by these Terms of Service. If you do not agree to these terms, please do
                    not use our services.
                </p>

                <h3>Use of Services</h3>
                <p>
                    You agree to use the services only for lawful purposes and in accordance with
                    these terms. You are responsible for your use and any actions taken under your
                    account.
                </p>

                <h3>Intellectual Property</h3>
                <p>
                    All content, trademarks, and logos on this site are the property of Advanix or
                    its licensors and are protected by applicable laws. You may not reproduce or
                    distribute any content without prior written consent.
                </p>

                <h3>Disclaimer</h3>
                <p>
                    Our services are provided "as is" without warranties of any kind. We do not
                    guarantee that the service will be uninterrupted, secure, or error-free.
                </p>

                <h3>Limitation of Liability</h3>
                <p>
                    To the maximum extent permitted by law, Advanix shall not be liable for any
                    indirect, incidental, or consequential damages arising from your use of the
                    services.
                </p>

                <h3>Changes to Terms</h3>
                <p>
                    We may update these terms from time to time. Continued use of the services after
                    changes constitutes acceptance of the updated terms.
                </p>

                <p>
                    For questions, contact us at <a href="mailto:business@advanix.in">business@advanix.in</a>.
                </p>
            </section>
        </div>
    );
};

export default TermsPage;


