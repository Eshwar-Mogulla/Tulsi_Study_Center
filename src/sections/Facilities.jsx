import React from 'react';
import { motion } from 'framer-motion';
import {
    FaChair, FaVideo, FaWifi, FaBook, FaLaptopHouse,
    FaCouch, FaCoffee, FaNewspaper, FaUtensils, FaStar, FaCarAlt
} from 'react-icons/fa';

const facilities = [
    { icon: <FaChair size={24} />, title: 'Comfortable Seats', desc: 'Ergonomic seating with separate spacious desks.' },
    { icon: <FaVideo size={24} />, title: 'CCTV Secured', desc: '24/7 camera surveillance for a safe environment.' },
    { icon: <FaStar size={24} />, title: 'Excellent Atmosphere', desc: 'Quiet, peaceful, and fully air-conditioned spaces.' },
    { icon: <FaCarAlt size={24} />, title: 'Spacious Parking', desc: 'Secure parking space available for all members.' },
    { icon: <FaWifi size={24} />, title: 'Free High-Speed WiFi', desc: 'Uninterrupted internet connection for seamless online study.' },
    { icon: <FaBook size={24} />, title: 'Fully Furnished Library', desc: 'Premium interior designed specifically for learners.' },
    { icon: <FaLaptopHouse size={24} />, title: 'Work From Library', desc: 'Adopt the modern WFL concept with premium facilities.' },
    { icon: <FaCouch size={24} />, title: 'Relaxation Zone', desc: 'Dedicated area to take breaks and refresh your mind.' },
    { icon: <FaCoffee size={24} />, title: 'Free Black Coffee', desc: 'Unlimited complimentary black coffee to keep you active.' },
    { icon: <FaNewspaper size={24} />, title: 'Daily Newspaper', desc: 'Access to top daily newspapers for current affairs.' },
    { icon: <FaUtensils size={24} />, title: 'Food Eating Area', desc: 'Hygienic and separate space to enjoy your customized meals.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Facilities = () => {
    return (
        <section id="facilities" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-secondary font-heading tracking-wide uppercase text-sm font-bold mb-2">Our Amenities</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Premium Facilities</h3>
                        <p className="max-w-2xl mx-auto text-gray-600 font-body text-lg">
                            We provide everything you need to maintain focus, stay productive, and study comfortably for hours.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {facilities.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-heading font-bold text-primary mb-3">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 font-body text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Facilities;
