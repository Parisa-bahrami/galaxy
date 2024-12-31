import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const SaturnScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      description={data?.saturnDescription}
      title={data?.saturnTitle}
      link={"/saturn"}
    />
  );
};

export default SaturnScreen;
