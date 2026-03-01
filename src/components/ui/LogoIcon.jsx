import React from 'react';

const LogoIcon = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className={className}
        >
            {/* Soft background circle */}
            <circle cx="50" cy="50" r="46" fill="currentColor" className="text-primary" />

            {/* Stylized Book motif */}
            <path d="M30 35 C 30 35, 50 25, 50 25 C 50 25, 70 35, 70 35 L 70 65 C 70 65, 50 75, 50 75 C 50 75, 30 65, 30 65 Z" fill="currentColor" className="text-secondary opacity-90" />
            <path d="M50 25 L 50 75" stroke="currentColor" className="text-background" strokeWidth="4" strokeLinecap="round" />

            {/* Leaf accent for "Tulsi" */}
            <path d="M50 45 Q 65 30 75 45 Q 65 60 50 45" fill="currentColor" className="text-accent" />
        </svg>
    );
};

export default LogoIcon;
