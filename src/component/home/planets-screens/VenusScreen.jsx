import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const VenusScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      name="venus"
      description={data?.venusDescription}
      title={data?.venusTitle}
      link={"/venus"}
    />
  );
};

export default VenusScreen;
