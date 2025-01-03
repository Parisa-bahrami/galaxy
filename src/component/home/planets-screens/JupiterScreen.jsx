import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const JupiterScreen = () => {
  const { data } = useTranslations("home");

  return (
    <PlanetSection
      name="jupiter"
      description={data?.jupiterDescription}
      title={data?.jupiterTitle}
      link={"/jupiter"}
      slideFromLeft
    />
  );
};

export default JupiterScreen;
