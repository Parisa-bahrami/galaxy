import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const SaturnScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      name="saturn"
      description={data?.saturnDescription}
      title={data?.saturnTitle}
      link={"/saturn"}
    />
  );
};

export default SaturnScreen;
