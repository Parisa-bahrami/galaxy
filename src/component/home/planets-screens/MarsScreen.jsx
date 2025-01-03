import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../PlanetSection";

const MarsScreen = () => {
  const { data } = useTranslations("home");
  return (
    <PlanetSection
      name="mars"
      description={data?.marsDescription}
      title={data?.marsTitle}
      link={"/mars"}
    />
  );
};

export default MarsScreen;
