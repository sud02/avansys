import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProjectsHistory from './components/ProjectHistory/ProjectsHistory.jsx';
import ServicesPage from './components/Home/Services/ServicesPage.jsx'; 
import ContactPage from './components/Contact/ContactForm.jsx';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import LegalPage from './components/Legal/LegalPage.jsx';
import TermsPage from './components/Legal/TermsPage.jsx';
import PrivacyPage from './components/Legal/PrivacyPage.jsx';
import CookiePolicyPage from './components/Legal/CookiePolicyPage.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Header />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/history" element={<ProjectsHistory />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/legal" element={<LegalPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
