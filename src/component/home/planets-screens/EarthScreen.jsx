import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const EarthScreen = () => {
  const { data } = useTranslations("home");

  return (
    <PlanetSection
      name="earth"
      description={data?.earthDescription}
      title={data?.earthTitle}
      link={"/earth"}
      slideFromLeft
    />
  );
};

export default EarthScreen;
