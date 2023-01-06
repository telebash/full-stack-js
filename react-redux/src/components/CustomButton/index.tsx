import React from "react";

interface CustomButtonProps {
    color: string;
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
    color,
    label,
    onClick,
    className
}: CustomButtonProps) => {
    return (
        <button
            className={`bg-${color}-500 hover:bg-${color}-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default CustomButton;
