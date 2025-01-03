import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const UranusScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      name="uranus"
      description={data?.uranusDescription}
      title={data?.uranusTitle}
      link={"/uranus"}
      slideFromLeft
    />
  );
};

export default UranusScreen;
