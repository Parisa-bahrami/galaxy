// import { jupiter } from "../../../consts/jupiter/jupiter-fa";
import useTranslations from "../../../hooks/useTranslation";
import useLanguageStore from "../../../stores/languageStore";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Jupiter.css";

const Jupiter = () => {
  const language = useLanguageStore((state) => state.language);

  const { data } = useTranslations("jupiter");

  const jupiter = data;

  return (
    <section
      className="p-4 md:p-8 rtl:text-right"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <PageHeader
      data={jupiter?.data}
        title={jupiter?.title}
        description={jupiter?.description}
        parallaxClass={"parallax-jupiter-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-jupiter-2"} />

      <SectionInfo
        title={jupiter?.formationTitle}
        description={jupiter?.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-jupiter-3"} />

      <SectionInfo
        title={jupiter?.featuresTitle}
        description={jupiter?.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-jupiter-4"} />

      <SectionInfo
        title={jupiter?.appearanceTitle}
        description={jupiter?.appearanceDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-jupiter-6"} />

      <SectionInfo
        title={jupiter?.atmosphereTitle}
        description={jupiter?.atmosphereDescription}
      />
      
      <SectionParallaxImage parallaxClass={"parallax-jupiter-8"} />

      <SectionInfo
        title={jupiter?.ringsTitle}
        description={jupiter?.ringsDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-jupiter-5"} />

      <SectionInfo
        title={jupiter?.moonsTitle}
        description={jupiter?.moonsDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-jupiter-7"} />

      <SectionInfo
        title={jupiter?.conclusionTitle}
        description={jupiter?.conclusionDescription}
      />
    </section>
  );
};

export default Jupiter;
