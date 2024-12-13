import useLanguageStore from "../../stores/languageStore";

const LanguageSwitcher = () => {
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      {language === "fa" ? "EN" : "FA"}
    </button>
  );
};

export default LanguageSwitcher;
