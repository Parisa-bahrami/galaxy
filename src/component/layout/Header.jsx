import { useLocation } from "react-router-dom";
import LanguageSwitcher from "../general/LanguageSwither";
import DarkModeSwitcher from "../general/DarkModeSwitcher";
import useTranslations from "../../hooks/useTranslation";

const Header = () => {
  const location = useLocation();

  const prettifyTitle = (title) => {
    const newTitle = title.replace("/", "");

    return newTitle;
  };

  const { data } = useTranslations("general");

  const matchTitle = (path) => {
    switch (path) {
      case "mercury":
        return data?.mercury;
      case "venus":
        return data?.venus;
      case "earth":
        return data?.earth;
      case "mars":
        return data?.mars;
      case "jupiter":
        return data?.jupiter;
      case "saturn":
        return data?.saturn;
      case "uranus":
        return data?.uranus;
      case "neptune":
        return data?.neptune;

      default:
        return data?.home;
    }
  };

  return (
    <div className="relative z-100  w-full h-16 flex items-center justify-center bg-white dark:bg-slate-800 transition-colors duration-300">
      <p className="text-2xl font-bold capitalize text-slate-950 dark:text-slate-50">
        {matchTitle(prettifyTitle(location.pathname)) || "Home"}
      </p>

      <div className="absolute right-4 flex items-center justify-center gap-2">
        <LanguageSwitcher />

        <DarkModeSwitcher />
      </div>
    </div>
  );
};

export default Header;
