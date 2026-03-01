import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';

const OpenHours = () => {
    return (
        <section className="py-8 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-dark-section rounded-3xl overflow-hidden p-[2px]"
                >
                    {/* Soft glow accent border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50 blur-sm"></div>

                    <div className="relative bg-dark-section rounded-[22px] px-8 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left shadow-2xl z-10">
                        <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-0">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-6">
                                <FaClock className="text-accent w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-white font-heading font-bold text-2xl sm:text-3xl mb-1">
                                    Open Daily
                                </h3>
                                <p className="text-gray-400 font-body text-sm uppercase tracking-wider">
                                    365 Days A Year
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-sm">
                            <p className="text-secondary font-heading font-medium text-lg mb-1">Timing</p>
                            <p className="text-white font-heading font-bold text-3xl sm:text-4xl tabular-nums">
                                7:00 AM <span className="text-gray-500 font-light mx-2">to</span> 10:00 PM
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OpenHours;
