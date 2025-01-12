import useLanguageStore from "../../stores/languageStore";

const LanguageSwitcher = () => {
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  return (
   
    <button
      onClick={toggleLanguage}
      className="p-2 bg-transparent text-slate-950 dark:text-white rounded-md"
    >
      {language === "fa" ? "EN" : "FA"}
      
    </button>
  );
};

export default LanguageSwitcher;
