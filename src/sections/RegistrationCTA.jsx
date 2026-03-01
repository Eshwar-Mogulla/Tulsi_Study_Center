import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const RegistrationCTA = () => {
    return (
        <section id="register" className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
                >
                    {/* Subtle background glow effect inside the CTA box */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg bg-secondary/30 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            Start Your Registration Today
                        </h2>
                        <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto mb-10">
                            Reserve your dedicated desk and experience the difference of studying in a premium, distraction-free environment.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <div className="relative group">
                                {/* Soft pulsing glow behind the primary CTA button */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <Button href="#contact" variant="white" className="relative text-lg px-8 py-4 w-full sm:w-auto">
                                    Register Now
                                </Button>
                            </div>

                            <Button href="https://wa.me/918850162558" variant="outline" target="_blank" className="text-lg px-8 py-4 w-full sm:w-auto border-gray-600 text-white hover:bg-white/10 hover:text-white dark:border-gray-500 dark:text-white dark:hover:bg-white/10 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                WhatsApp Direct
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationCTA;
