/* eslint-disable react/prop-types */

import SunIcon from "../svgs/SunIcon";
import MoonIcon from "../svgs/MoonIcon";

const MoonSunToggle = ({ isToggled, onToggle }) => {
  return (
    <label className="relative inline-block w-16 h-8">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isToggled}
        onChange={onToggle}
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out ${
          isToggled ? "bg-slate-900" : "bg-blue-400"
        }`}
      >
        <span
          className={`absolute left-1 top-1 w-6 h-6 rounded-full transform transition-transform duration-300 ease-in-out ${
            isToggled ? "translate-x-8" : ""
          }`}
        >
          {isToggled ? (
            <MoonIcon height={24} width={24} />
          ) : (
            <SunIcon height={24} width={24} />
          )}
        </span>
      </span>
    </label>
  );
};

export default MoonSunToggle;
