import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark-section text-gray-300 font-body border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand Info */}
                    <div className="col-span-1">
                        <h3 className="font-heading font-bold text-2xl text-white tracking-tight mb-4">
                            TULSI<span className="text-secondary"> STUDY CENTER</span>
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed max-w-sm">
                            A peaceful, fully furnished study space designed for focused learning and optimal productivity. Study comfortably, achieve greatness.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/tulsistudycenter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://wa.me/918850162558" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                <span className="sr-only">WhatsApp</span>
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="font-heading font-semibold text-lg text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-secondary transition-colors text-sm">Home</a></li>
                            <li><a href="#facilities" className="hover:text-secondary transition-colors text-sm">Facilities</a></li>
                            <li><a href="#gallery" className="hover:text-secondary transition-colors text-sm">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors text-sm">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h4 className="font-heading font-semibold text-lg text-white mb-4">Contact Information</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary flex-shrink-0" />
                                <span className="text-sm">202, B Wing, Phase 1, Chandrangan Residency Tower, <br />Above Torrent Bill Office, Near Station, Diva (East), Thane-400612</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-3 text-secondary flex-shrink-0" />
                                <span className="text-sm">8850162558 / 8010497665</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© {new Date().getFullYear()} Tulsi Study Center. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Premium Workspace for Students.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
