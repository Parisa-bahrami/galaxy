import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const VenusScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      description={data?.venusDescription}
      title={data?.venusTitle}
      link={"/venus"}
    />
  );
};

export default VenusScreen;
