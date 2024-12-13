import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the language store
const useLanguageStore = create(
  persist(
    (set) => ({
      language: "fa", // Default language is Farsi
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === "fa" ? "en" : "fa",
        })),
    }),
    {
      name: "language-storage", // Unique name for local storage
    }
  )
);

export default useLanguageStore;
