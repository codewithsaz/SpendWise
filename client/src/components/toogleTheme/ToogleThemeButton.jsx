import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const ToogleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Toggle the darkMode state
    setDarkMode(!darkMode);

    // Toggle the 'dark' class on the <html> tag
    const htmlElement = document.documentElement;
    if (!darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center m-0 ">
      <button
        className="text-sigmaPrimary   p-1 rounded hover:bg-sigmaPrimary hover:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6" /> // Display sun icon in dark mode
        ) : (
          <MoonIcon className="w-6 h-6" /> // Display moon icon in light mode
        )}
      </button>
    </div>
  );
};

export default ToogleThemeButton;
