import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";

const NeptuneScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      description={data?.neptuneDescription}
      title={data?.neptuneTitle}
      link={"/neptune"}
    />
  );
};

export default NeptuneScreen;
