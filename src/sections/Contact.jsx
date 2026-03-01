import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-heading tracking-wide uppercase text-sm font-bold mb-2">Get in Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Visit Our Center</h3>
                        <p className="max-w-2xl mx-auto text-gray-600 font-body text-lg">
                            Have questions or ready to book your desk? Contact us today.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Contact Details */}
                    <div className="p-10 md:p-14">
                        <h4 className="text-2xl font-heading font-bold text-primary mb-8">Contact Information</h4>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-secondary mr-6 flex-shrink-0">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div>
                                    <h5 className="font-heading font-bold text-lg text-primary mb-1">Call Us</h5>
                                    <p className="text-gray-600 font-body text-lg">8850162558</p>
                                    <p className="text-gray-600 font-body text-lg">8010497665</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-secondary mr-6 flex-shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h5 className="font-heading font-bold text-lg text-primary mb-1">Location Address</h5>
                                    <p className="text-gray-600 font-body leading-relaxed max-w-sm">
                                        202, B Wing, Phase 1, Chandrangan Residency Tower,
                                        Above Torrent Bill Office, Near Station,
                                        Diva (East), Thane-400612
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h5 className="font-heading font-bold text-lg text-primary mb-6">Send us a message</h5>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button href="https://wa.me/918850162558" variant="primary" target="_blank" className="flex items-center gap-2">
                                    <FaWhatsapp size={20} />
                                    Connect on WhatsApp
                                </Button>
                                <Button href="https://instagram.com/tulsistudycenter" variant="primary" target="_blank" className="flex items-center gap-2">
                                    <FaInstagram size={20} />
                                    Follow on Instagram
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="h-full min-h-[400px] w-full relative bg-gray-200">
                        {/* Embed Google Map - used Diva East Thane general coords for demo since precise embed needs API or specific location URL */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15073.497551608688!2d73.03362075!3d19.178877199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf7b7522f7cd%3A0xe542617f69dfbead!2sDiva%20East%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                            title="Tulsi Study Center Location"
                        ></iframe>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
