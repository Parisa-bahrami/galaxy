import { useLocation } from "react-router-dom";
import LanguageSwitcher from "../general/LanguageSwither";
import DarkModeSwitcher from "../general/DarkModeSwitcher";

const Header = () => {
  const location = useLocation();

  const prettifyTitle = (title) => {
    const newTitle = title.replace("/", "");

    return newTitle;
  };

  return (
    <div className="relative w-full h-16 flex items-center justify-center bg-white dark:bg-slate-800 transition-colors duration-300">
      <p className="text-2xl font-bold capitalize text-slate-950 dark:text-slate-50">
        {prettifyTitle(location.pathname) || "Home"}
      </p>

      <div className="absolute right-4 flex items-center justify-center gap-2">
        <LanguageSwitcher />

        <DarkModeSwitcher />
      </div>
    </div>
  );
};

export default Header;
