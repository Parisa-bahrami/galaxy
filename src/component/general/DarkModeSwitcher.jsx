/* eslint-disable react/prop-types */

import { useState } from "react";

import useDarkMode from "../../hooks/useDarkMode";
import MoonSunToggle from "./MoonSunToggle";

const DarkModeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isToggled, setIsToggled] = useState(isDarkMode);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleDarkMode();
  };

  return (
    <div className="flex items-center justify-center">
      <MoonSunToggle isToggled={isToggled} onToggle={handleToggle} />
    </div>
  );
};

export default DarkModeSwitcher;
