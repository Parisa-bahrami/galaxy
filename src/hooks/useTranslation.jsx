import { useState, useEffect } from "react";

import useLanguageStore from "../stores/languageStore";
import { getTranslation } from "../utils/getTranslation";

const useTranslations = (pageKey) => {
  const language = useLanguageStore((state) => state.language);

  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const fetchedTranslations = await getTranslation(pageKey, language);
      setTranslations(fetchedTranslations);
    };

    fetchTranslations();
  }, [pageKey, language]);

  return { data: translations };
};

export default useTranslations;
