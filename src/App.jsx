import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Facilities from './sections/Facilities';
import OpenHours from './sections/OpenHours';
import Gallery from './sections/Gallery';
import RegistrationCTA from './sections/RegistrationCTA';
import Contact from './sections/Contact';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, useScroll } from 'framer-motion';

function App() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="relative font-body bg-background min-h-screen text-textMain selection:bg-accent selection:text-white">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-secondary transform origin-left z-[60]"
                style={{ scaleX: scrollYProgress }}
            />

            <Navbar />

            <main>
                <Hero />
                <Facilities />
                <OpenHours />
                <Gallery />
                <RegistrationCTA />
                <Contact />
            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/918850162558"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 z-50 group"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaWhatsapp size={32} />
                {/* Glow effect */}
                <span className="absolute w-full h-full bg-[#25D366] rounded-full filter blur-md opacity-40 group-hover:opacity-60 -z-10 animate-pulse"></span>
            </motion.a>
        </div>
    );
}

export default App;
