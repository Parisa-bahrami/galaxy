import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const EarthScreen = () => {
  const { data } = useTranslations("home");

  return (
    <PlanetSection
      description={data?.earthDescription}
      title={data?.earthTitle}
      link={"/earth"}
      // image={image}
      slideFromLeft
    />
  );
};

export default EarthScreen;
