import React from "react";
import { useState } from "react";

import CustomButton from "../CustomButton";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            setTheme("light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    };

    return (
        <CustomButton
            onClick={toggleTheme}
            color={theme === "light" ? "stone" : "yellow"}
            label={theme === "light" ? "Dark" : "Light"}
        />
    );
};

export default ThemeToggle;
