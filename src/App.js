import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProjectsHistory from './components/ProjectHistory/ProjectsHistory.jsx';
import ServicesPage from './components/Home/Services/ServicesPage.jsx'; 
import ContactPage from './components/Contact/ContactForm.jsx'; 

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/history" element={<ProjectsHistory />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
