import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const MercuryScreen = () => {
  const { data } = useTranslations("home");
  return (
    <div>
      <PlanetSection
        name="mercury"
        description={data?.mercuryDescription}
        title={data?.mercuryTitle}
        link={"/mercury"}
        slideFromLeft
      />
    </div>
  );
};

export default MercuryScreen;
