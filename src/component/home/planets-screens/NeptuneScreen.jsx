import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const NeptuneScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      name="neptune"
      description={data?.neptuneDescription}
      title={data?.neptuneTitle}
      link={"/neptune"}
    />
  );
};

export default NeptuneScreen;
