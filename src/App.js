import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProjectsHistory from './components/ProjectHistory/ProjectsHistory.jsx';
import ServicesPage from './components/Home/Services/ServicesPage.jsx'; 
import ContactPage from './components/Contact/ContactForm.jsx';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';



function App() {
    return (
        <Router>
            <div>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/history" element={<ProjectsHistory />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            <Footer />
            </div>
        </Router>

    );
}

export default App;
