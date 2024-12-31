import useTranslations from "../../../hooks/useTranslation";
import PlanetSection from "../../pages/home/PlanetSection";


const MarsScreen = () => {
  const { data } = useTranslations("home");
  return (
  <PlanetSection
  description={data?.marsDescription}
  title={data?.marsTitle}
  link={"/mars"}
  // image={image}
/>
 )
};

export default MarsScreen;