import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const JupiterScreen = () => {
  const { data } = useTranslations("home");

  return (
    <PlanetSection
      description={data?.jupiterDescription}
      title={data?.jupiterTitle}
      link={"/jupiter"}
      slideFromLeft
    />
  );
};

export default JupiterScreen;
