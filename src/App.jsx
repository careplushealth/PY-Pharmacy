import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EligibilityPage from './pages/Eligibilitypage';
import ScrollToTop from './Scrolltotop';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
