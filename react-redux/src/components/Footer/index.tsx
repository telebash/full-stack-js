import React from "react";

interface FooterProps {
    theme?: string;
    className?: string;
};

const Footer: React.FC<FooterProps> = ({
    theme = "light",
    className
}: FooterProps) => {
    return (
        <footer className={`bg-slate-900 py-10 ${className}`}>
            <p className="text-white text-center text-2xl">Footer</p>
        </footer>
    );
};

export default Footer;
