import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const UranusScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      description={data?.uranusDescription}
      title={data?.uranusTitle}
      link={"/uranus"}
      slideFromLeft
    />
  );
};

export default UranusScreen;
