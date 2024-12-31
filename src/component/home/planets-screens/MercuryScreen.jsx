import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const MercuryScreen = () => {
 
  const { data } = useTranslations("home");
  return (
    <div>
      <PlanetSection
        description={data?.mercuryDescription}
        title={data?.mercuryTitle}
        link={"/mercury"}
        slideFromLeft
      />
    </div>
  );
};

export default MercuryScreen;
