import React from "react";

interface TextFieldProps {
    color: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const CustomTextField: React.FC<TextFieldProps> = ({
    label,
    value,
    color,
    onChange,
    className
}) => {
    return (
        <div className="flex flex-col">
            <label className={`text-sm font-bold text-${color}-700 tracking-wide`}>{label}</label>
            <input
                className={`border rounded w-full py-2 px-3 text-${color}-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${className}`}
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomTextField;
