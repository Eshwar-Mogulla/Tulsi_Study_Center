import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    target,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded-lg px-6 py-3";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5 relative group overflow-hidden",
        secondary: "bg-secondary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        accent: "bg-accent text-white hover:bg-opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary",
        white: "bg-white text-primary hover:bg-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 relative group overflow-hidden",
    };

    const Component = href ? motion.a : motion.button;
    const linkProps = href ? { href, target } : {};

    return (
        <Component
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            whileTap={{ scale: 0.98 }}
            {...linkProps}
            {...props}
        >
            {/* Subtle glow effect for primary buttons */}
            {variant === 'primary' && (
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            )}
            {children}
        </Component>
    );
};

export default Button;
