// Utility function to dynamically import translations
export const getTranslation = async (pageKey, language) => {
  // Dynamically import the translation file
  const translationModule = await import(
    `../consts/${pageKey}/${pageKey}-${language}.js`
  );

  // Return the translation object
  return translationModule[pageKey];
};
